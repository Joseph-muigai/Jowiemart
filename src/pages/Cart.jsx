import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import HeroSection from '../components/Ui/HeroSection'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)
  return (
    <Helmet title="Cart">
      <HeroSection title="Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
             


                
              <table className='table bordered'> 
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                {

cartItems.length === 0 ? (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="cart-empty">
      <h3>Your cart is empty</h3>
      <p>Looks like you haven't added any items to your cart yet.</p>      

    </div>

  </motion.div>
) : (
  cartItems.map((item,index) => (

    
      <Tr item={item} key ={index}/>
                  
                   ))
                   ) 
                 }
                </tbody>
              </table>
             
            </Col>
            <Col lg="3"></Col>
          </Row>
        </Container>
      </section>
      

    </Helmet>
  )
}
const Tr =({item})=>{
  const dispatch = useDispatch()
  const deleteProduct = ()=>{
    dispatch(cartActions.removeItemFromCart(item.id))
  }
  return<tr>
    <td>
      <img src={item.imgUrl} alt="" />
    </td>
    <td> {item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}pcs</td>
    <td>
      <motion.i 
      whileTap={{scale:1.2}}
      class="ri-delete-bin-line"
      onClick={deleteProduct}
      ></motion.i>
      </td>
  </tr>
}
export default Cart