import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Router from '../../routers/Router'
import AdminNav from '../../admin/AdminNav'
import { useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  return (
    <>
    {
      location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Header />
    }
     <div className="">
        <Router />
     </div>
     <Footer/> 
    </>
  )
}

export default Layout