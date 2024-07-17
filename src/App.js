import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import OnlineUsers from './components/onlineusers/OnlineUsers';
import { useAuthContext } from './hooks/useAuthContext';

const App = () => {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route path='/' element={user ? <Dashboard /> : <Navigate to='/login' />} />
              <Route path='/create' element={user ? <Create /> : <Navigate to='/login' />} />
              <Route path='/projects/:id' element={user ? <Project /> : <Navigate to='/login' />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
