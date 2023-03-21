import React from 'react'
import './footer.css'
import { Container,Row, Col,ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg ="4" className='mb-4' md='6'>
          <div className="logo">
              
            <div>
              <h1 className='text-white'>JowieMart</h1>

            </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tenetur possimus cupiditate praesentium sed vero dolor culpa dolore dolorem, ullam eum, quia, magnam est minus facilis veritatis! Aperiam, rerum repudiandae?
            </p>
          </Col>
          <Col lg ="3" md="3" className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to = "#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to = "#">Modern sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to = "#">Arm chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to = "#">Smart watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg ="2" className='mb-4' md="3">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to = "/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to = "/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to = "/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to = "#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg ="3" md="4">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='footer__contact'> 
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <span> <i class="ri-map-pin-line"></i></span>
                  <p>123,jowieStreet,SomePlace</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+254708589564</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <span><i class="ri-mail-line"></i></span>
                  <p>wambichojoseph@gmail.com</p>
                </ListGroupItem>
                
              </ListGroup>
            </div>
          </Col>
          <Col lg ="12">
            <p className="footer__copyright  text-center" >
              Copyright {year} developed by Joseph-muigai. All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer