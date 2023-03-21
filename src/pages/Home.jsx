import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import Services from '../components/services/Services'
import ProductsList from '../components/Ui/ProductsList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/Ui/Clock'
const Home = () => {
  const year = new Date().getFullYear()

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestsales, setBestsales] = useState([])
  useEffect(()=>{
    const filteredTrendingProducts = products.filter(product => product.category === "chair")
    const filteredBestSales = products.filter(product => product.category === "sofa")
    setTrendingProducts(filteredTrendingProducts)
    setBestsales(filteredBestSales)
  },[])

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
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className="section__title">
              Trending Products
            </h2>
          </Col>
          <ProductsList data = {trendingProducts}/>
        </Row>
      </Container>
    </section>
    <section className="best__sales">
      <Container>
          <Row>
            <Col lg ='12' className ="text-center">
              <h2 className="section__title">Best sales</h2>
            </Col>
              <ProductsList data = {bestsales}/>
          </Row>
      </Container>
    </section>
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg="6" md ="6">
            <div className="clock__top-content">
            <h2 className="text-white fs-6 mb-2">Hurry up! Limited time offer</h2>
            <h3 className="text-white fs-5 mb-2">Quality Armchair</h3>
            </div>
            <Clock />
            < motion.button whileTap={{scale:1.2}} className="buy__btn store__btn"><Link to= '/shop'>Visit Store</Link></motion.button>
          </Col>
          <Col lg="6" md ="6" className='text-end'>
            <img src={counterImg} alt="counter image" />
          </Col>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Home