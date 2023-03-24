import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import HeroSection from '../components/Ui/HeroSection'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector(state=> state.cart.totalAmount)
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
            <Col lg="3">
              <div className="">
                <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal
                <span className='fs-4 fw-bold'>${totalAmount}</span>
                </h6>
              </div>
              <p className='fs-6 '>Taxes and shipping will be calculated at checkout</p>
              <div className="">
                <button className="buy__btn w-100">
                  <Link to ='/shop'>Continue shopping</Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to ='/checkout'>Proceed to Checkout</Link>
                </button>
              </div>
            </Col>
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