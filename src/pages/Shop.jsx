import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import HeroSection from '../components/Ui/HeroSection'
import { Container,Row, Col } from 'reactstrap'
import '../styles/shop.css';
import products from '../assets/data/products'
import ProductsList from '../components/Ui/ProductsList'
const Shop = () => {

  const [productsData, setProductsData] = useState(products)
  const handleFilter = (e) => {
    const value = e.target.value
    if (value === 'all') {
      setProductsData(products)
    } else {
      const filteredProducts = products.filter((product) => product.category === value)
      setProductsData(filteredProducts)
    }
  }
  const handleSort = (e) => {
    const value = e.target.value
    if (value === 'ascending') {
      const sortedProducts = productsData.sort((a, b) => a.price - b.price)
      setProductsData(sortedProducts)
    } else if (value === 'descending') {
      const sortedProducts = productsData.sort((a, b) => b.price - a.price)
      setProductsData(sortedProducts)
    }
  }

  return (
    <Helmet title={"Shop"}>
      <HeroSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg='3' md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="all">Filter By Category</option>
                  <option value="all">All</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="Chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md="3">
            <div className="filter__widget">
                <select onChange={handleSort}>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                  
                </select>
              </div>
            </Col>
            <Col lg='6' md="6">
              <div className="search__box">
                <input type="text" placeholder="Search Products" />
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
        
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
              productsData.length=== 0? <h2 className="section__title">No Products Found</h2> 
              :<ProductsList data={productsData} />
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop