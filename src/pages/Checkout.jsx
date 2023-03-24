import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col,Form, FormGroup } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import HeroSection from '../components/Ui/HeroSection'
import '../styles/checkout.css'


const Checkout = () => {
  return (
    <Helmet title="Checkout">
      <HeroSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className=' mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type="text"placeholder='Enter your Name' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="Email"placeholder='Enter your Email' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="number"placeholder='Phone number' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text"placeholder='Street Adress' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text"placeholder='City' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text"placeholder='Postal Adress' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text"placeholder='Country' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>Total Qty : <span>0</span></h6>
                <h6>Subtotal : <span>$120</span></h6>
                <h6>Shipping: <span>$10</span></h6>
                
                <h6>Tax : <span>$0</span></h6>
                <h4>Total : <span>$130</span></h4>
              </div>
              <button className="buy__btn auth__btn w-100"> Place an order</button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout