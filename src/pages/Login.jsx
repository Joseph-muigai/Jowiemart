import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col,Form, FormGroup } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import HeroSection from '../components/Ui/HeroSection'
import '../styles/login.css'
const Login = () => {
  return (
    <Helmet title="Login">
      <HeroSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" className='m-auto text-center'>
              <h3 className="fw-bold fs-4">Login</h3>

              <Form className='auth__form'>
                <FormGroup className='form__group'>
                   <input type="email" placeholder='Enter your email'/>
                </FormGroup>
                <FormGroup className='form__group'>
                   <input type="password" placeholder='Enter your Password'/>
                </FormGroup>
                <button className="buy__btn auth__btn">
                  Login
                </button>
                <p>Dont have an account? <Link to='/signup'>Create an account</Link> </p>
              </Form>

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login