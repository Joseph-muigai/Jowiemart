import React, { useRef, useState } from 'react'
import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import HeroSection from '../components/Ui/HeroSection'
import '../styles/productDetails.css'
import ProductsList from '../components/Ui/ProductsList'
import { useDispatch } from 'react-redux'
import {cartActions} from '../redux/cartSlice'

const ProductDetails = () => {
  const {id} = useParams()
  const product = products.find((product) => product.id === id)
  const {productName,imgUrl,price,description,category, reviews ,avgRating,shortDesc} = product
  const [tab, setTab] = useState('desc')
  const [rating, setRating] = useState(null)
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const relatedProducts = products.filter((product) => product.category === category)
  const submitHandler = (e) => {
    e.preventDefault()
    const review = {
      rating: rating,
      text: reviewMsg.current.value,
      user: reviewUser.current.value,
    }
    reviews.push(review)
    setRating(null)
    reviewUser.current.value = ''
    reviewMsg.current.value = ''

  }
  return (
    <Helmet title={productName}>
      <HeroSection title={productName} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details ">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-half-fill"></i></span >
                 </div>
                  <p>(<span> {avgRating}</span> ratings)</p>
                </div>
                <div className='d-flex align-items-center gap-5'>
                <span className='product__price'>${price}</span>
                <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className='mt-3'>{shortDesc}</p>
                <motion.button whileTap={{scale:1.1}} className="buy__btn">Add to Cart</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                 className={`${ tab === 'desc'? 'active__tab':""}`}
                  onClick = {() => setTab('desc')}
                 >Description</h6>
                <h6  
                  className={`${ tab === 'rev'? 'active__tab':""}`}
                  onClick = {() => setTab('rev')}
                >Reviews ({reviews.length})</h6>
              </div>
              {
                  tab === 'desc'? (
                    <div className="tab__content mt-5">
                    <p>{description}</p>    
                  </div>
                  ):
                  (
                      <div className="product__review">
                        <div className="review__wrapper">
                          <ul>
                            {
                              reviews.map((review,index) => 
                                (<li key={index} className ="md-4">
                                  <h6>John Doe</h6>
                                  <span>{review.rating} (rating)</span>
                                  <p>{review.text}</p>
                                  </li>)

                              )


                            }
                          </ul>
                          <div className="review__form">
                            <h4>Leave your experience</h4>
                            <form onSubmit={submitHandler}>
                              <div className="form__group">                              
                                <input type="text" placeholder="Enter name" id='name' ref={reviewUser}/>
                              </div>
                              <div className="form__group d-flex align-items-center gap-5">                               
                                <span onClick={()=>setRating(1)}>1 <i class="ri-star-s-fill"></i></span>
                                <span onClick={()=>setRating(2)}>2 <i class="ri-star-s-fill"></i></span>
                                <span onClick={()=>setRating(3)}>3 <i class="ri-star-s-fill"></i></span>
                                <span onClick={()=>setRating(4)}>4 <i class="ri-star-s-fill"></i></span>
                                <span onClick={()=>setRating(5)}>5 <i class="ri-star-s-fill"></i></span>
                              </div>
                              <div className="form__group">                              
                                <textarea rows={4} type="text" placeholder="Review message..." ref={reviewMsg}/>
                              </div>
                              <button className="buy__btn" type='submit'>
                                Submit
                              </button>
                            </form>

                          </div>
                        </div>
                      </div>
                  )
                  
                }
              
              
            </Col>
            <Col lg='12'>
              <h2 className="related__title">
                You may also like
              </h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails