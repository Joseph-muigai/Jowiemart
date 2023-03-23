import React from 'react'
import { Container } from 'reactstrap'
import '../../styles/heroSection.css'

const HeroSection = ({title}) => {
  return (
    <section className="hero__section1">
        <Container className='text-center'>
            <h1>{title}</h1>
        </Container>


    </section>
  )
}

export default HeroSection