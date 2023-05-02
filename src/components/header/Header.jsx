import React, { useEffect, useRef } from 'react'
import './header.css'
import logo from '../../assets/images/eco-logo.png'
import user_icon from '../../assets/images/user-icon.png'
import {Container,Row} from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux'
import useAuth from '../../custom_hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'


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
  const menuRef = useRef(null) 
  const navigate = useNavigate()
  const  {currentUser} = useAuth()
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const profileActionsRef = useRef(null)
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
  
  const logout = async()=>{
    try {
      await signOut(auth)
      toast.success('Logged out successfully')
      navigate('/home')
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    stickyHeaderfunc()
    return ()=>window.removeEventListener("scroll",stickyHeaderfunc)
  })
  const menuToggle =()=> menuRef.current.classList.toggle('active__menu')
  const profileActionsToggle =()=>{ 
    // console.log(profileActionsRef.current.classList);
    profileActionsRef.current.classList.toggle('show__profileActions')
  }
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
          
          <div className="navigation" ref={menuRef} onClick ={menuToggle} >
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
              <Link to="/cart">

              <i class="ri-shopping-bag-line"></i>
              <span className="badge">{totalQuantity}</span>
              </Link>
            </span>
            <div className='profile'>
              < motion.img
               whileTap ={{scale:1.2}} 
               img src={ currentUser? currentUser.photoURL: user_icon} alt="user_icon" 
               onClick={profileActionsToggle}
               />
               
              <div className="profile__actions" ref={profileActionsRef} onClick={profileActionsToggle}>
                {
                  currentUser? 
                  (<span onClick={logout}>Logout</span>): 
                  (<div className='d-flex align-items-center justify-content-center flex-column'>
                    <Link to ='/signup'>Signup</Link>
                    <Link to='/login'>Login</Link>
                  </div>)
                  
                }
              </div>
            </div>
          <div className="mobile__menu">
            <span onClick ={menuToggle}><i class="ri-menu-line"></i></span>
          </div>
          </div>
        </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header