import { motion } from 'framer-motion'
import React from 'react'
import '../../styles/productCard.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <Col lg="3" md="4" >
        <div className="product__item">
        <div className="product__img">
            <motion.img whileHover={{scale:0.9}} src={product.imgUrl} alt="product" />
        </div>
        <div className="p-2 product__info">
        <h3 className="product__name"> <Link to ={`/shop/${product.id}`}> {product.productName}</Link> </h3>
        <span >{product.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">${product.price}</span>
            <motion.span whileTap={{scale:1.2}}><i class="ri-add-line"></i></motion.span>

        </div>
        </div>
    </Col>

  )
}

export default ProductCard