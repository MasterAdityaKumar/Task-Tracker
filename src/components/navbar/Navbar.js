import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import templeLogo from '../../assets/logo.jpg';
import './Navbar.css';
import { useAuthContext } from '../../hooks/useAuthContext';

const Navbar = () => {
	const { logout, isPending } = useLogout();
	const { user } = useAuthContext();

	return (
		<div className="navbar">
		  <ul>
			<li className="logo">
			  <img src={templeLogo} alt="dojo logo" />
			  <span>Task Tracker</span>
			</li>
			
			{ !user && (
			  <>
				<li>
				  <Link to="/login">Login</Link>
				</li>
				<li>
				  <Link to="/signup">Signup</Link>
				</li>
			  </>
			) } 
			{ user && (
			  <li>
				{isPending ? (
				  <button className="btn" disabled>
					Logging out...
				  </button>
				) : (
				  <button className="btn" onClick={logout}>
					Logout
				  </button>
				)}
			  </li>
			)}
		  </ul>
		</div>
	  )
};

export default Navbar;
