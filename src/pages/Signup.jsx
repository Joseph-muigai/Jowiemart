import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col,Form, FormGroup } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import HeroSection from '../components/Ui/HeroSection'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from 'firebase/firestore'
import { auth } from '../firebase.config' 
import { toast } from 'react-toastify'
import { storage } from '../firebase.config'
import { db } from '../firebase.config'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom'



const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
 const navigate = useNavigate()
  const handleSignup = async(e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredentials.user

      const storageRef = ref(storage, `images/${Date.now() + username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on((error)=>{
        toast.error(error.message)
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          // update user profile
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL
          });
        
          // store user data to firestore
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            username: username,
            photoURL: downloadURL,
          });
        })
      })
      setLoading(false)
      toast.success('Account created successfully')
      navigate('/login')
    } catch (error) {
      setLoading(false)

      console.log(error)
      toast.error('something went wrong')
      
    }
  }
  return (
    <Helmet title="Signup">
    <HeroSection title="Signup" />
    <section> 

      <Container>
        <Row>
          {
            loading? (<Col lg="6" className='m-auto text-center'>
              <h5 className='fw-bold'>Loading.....</h5>
             </Col>)
             :
             (<Col lg="6" className='m-auto text-center'>
            <h3 className="fw-bold fs-4 mb-4">Signup</h3>

            <Form className='auth__form' onSubmit={handleSignup}>
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

          </Col>)
         }          
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Signup