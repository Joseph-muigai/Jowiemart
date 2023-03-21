import React, { useEffect, useRef } from 'react'
import './header.css'
import logo from '../../assets/images/eco-logo.png'
import user_icon from '../../assets/images/user-icon.png'
import {Container,Row} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'

 const nav__link = [
  {
    path:"/home",
    display: "Home"
  },
  {
    path:"/shop",
    display: "Shop"
  },
  {
    path:"/cart",
    display: "Cart"
  },
 ]
const Header = () => {
  const headerRef = useRef(null)
  const stickyHeaderfunc =()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80|| document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }
      else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(()=>{
    stickyHeaderfunc()
    return ()=>window.removeEventListener("scroll",stickyHeaderfunc)
  })
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="Jowiemart logo" />
            <div>
              <h1>JowieMart</h1>
              {/* <p>Since 2023</p> */}
            </div>
            </div>
          
          <div className="navigation">
            <ul className="menu">
              {
                nav__link.map((item, index)=>(
                  <li className="nav__item" key = {index}>
                    <NavLink to ={item.path}
                    className = {(navClass)=>navClass.isActive ? 'nav__active':""}
                    >{item.display}</NavLink>
                  </li>
                ))
              }           
            </ul>
          </div>
          <div className="nav__icons">
            <span className="fav__icon">
              <i class="ri-heart-line"></i>
              <span className="badge">1</span>
            </span>
            <span className='cart__icon'>
              <i class="ri-shopping-bag-line"></i>
              <span className="badge">1</span>
            </span>
            <span>
              < motion.img whileTap ={{scale:1.2}} img src={user_icon} alt="user_icon" />
            </span>
          </div>
          <div className="mobile__menu">
            <span ><i class="ri-menu-line"></i></span>
          </div>
        </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header