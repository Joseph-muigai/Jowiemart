import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import Services from '../components/services/Services'
const Home = () => {
  const year = new Date().getFullYear()
  return<Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg ='6' md={6}>
            <div className="hero__content">
              <p className="hero__subtitle">Trending products in {year}</p>
              <h2>Make your interior more Miminalistic & mordern</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur molestiae provident magni? Voluptatem recusandae quos quibusdam, omnis necessitatibus distinctio magnam labore ad esse laboriosam temporibus animi ab alias beatae debitis.</p>
              <motion.button whileTap={{scale:1.2}} className="buy__btn"> <Link to ="/shop">SHOP NOW</Link> </motion.button>
            </div>
          </Col>
          <Col lg ='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="heroImg" />
            </div>
          </Col>
        
        </Row>
      </Container>
    </section>
    <Services />
  </Helmet>
}

export default Home