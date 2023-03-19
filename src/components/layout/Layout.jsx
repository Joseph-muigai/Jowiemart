import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Routers from '../../routers/Router'

const Layout = () => {
  return (
    <>
     <Header />
     <div className="">
        <Routers />
     </div>
     <Footer/>
    </>
  )
}

export default Layout