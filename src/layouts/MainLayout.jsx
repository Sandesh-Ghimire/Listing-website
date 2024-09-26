import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar' // Assuming Navbar is inside components
import Footer from '../components/Footer'
// import {ToastContainer} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => { // Pass isAuthenticated as a prop
  return (
    <>
    
      <Navbar /> {/* Pass isAuthenticated to Navbar */}
      <Outlet />
      {/* <ToastContainer /> */}
      <Footer/>
    </>
  )
}

export default MainLayout;
