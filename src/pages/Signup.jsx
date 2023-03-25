import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col,Form, FormGroup } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import HeroSection from '../components/Ui/HeroSection'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config'



const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)


  return (
    <Helmet title="Signup">
    <HeroSection title="Signup" />
    <section>

      <Container>
        <Row>
          <Col lg="6" className='m-auto text-center'>
            <h3 className="fw-bold fs-4 mb-4">Signup</h3>

            <Form className='auth__form'>
              <FormGroup className='form__group'>
                 <input
                  type="text" 
                  placeholder='username' 
                  value={username}
                  onChange ={(e)=>setUsername(e.target.value)}
                 />
              </FormGroup>
              <FormGroup className='form__group'>
                 <input
                  type="email" 
                  placeholder='Enter your email' 
                  value={email}
                  onChange ={(e)=>setEmail(e.target.value)}
                 />
              </FormGroup>
              <FormGroup className='form__group'>
                 <input 
                 type="password" 
                 placeholder='Enter your Password'
                 value={password}
                  onChange ={(e)=>setPassword(e.target.value)}
                 />
              </FormGroup>
              <FormGroup className='form__group'>
                <label htmlFor="file">Choose Avator</label>
                 <input 
                 type="file" 
                 id='file'
                 
                  onChange ={(e)=>setFile(e.target.files[0])}
                 />
              </FormGroup>
              <button className="buy__btn auth__btn">
                Create an Account
              </button>
              <p>Already have an account? <Link to='/login'>login</Link> </p>
            </Form>

          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Signup