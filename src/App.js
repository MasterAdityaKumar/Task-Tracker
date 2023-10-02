import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Routes,Route ,Navigate} from "react-router-dom";
import { useState, useEffect } from "react";
//styles
import './App.css'

//pages and components
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'


//auth
import { useAuthContext } from "./hooks/useAuthContext";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import OnlineUsers from "./components/OnlineUsers";

const App = () => {

  const { user, authIsReady } = useAuthContext();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className='App'>
      {authIsReady && (
      <BrowserRouter>
      {user && <Sidebar/>}
        <div className="container">
          <Navbar/>
          <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}/>
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />}/>
          <Route path="/create" element={user ? <Create /> : <Navigate to="/login" />}/>
          <Route path="/project/:id" element={user ? <Project /> : <Navigate to="/login" />}/>
          </Routes>
        </div>
        {user && width > breakpoint && <OnlineUsers />}
      </BrowserRouter>
        )}
    </div>
  )
}

export default App
