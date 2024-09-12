import React from 'react'
// import Pic1 from './Images/Pic1.jpg';
// import Pic2 from './Images/Pic2.jpg';
// import Pic3 from './Images/Pic3.jpg';
// import Pic4 from './Images/Pic4.jpg';

import { Carousel, Col, Container, Row } from 'react-bootstrap'

function MyCarousel() {
  return (
    <div>
      <Container fluid>
        <Row>
            <Col>
            {/* slide ko rukhne k liye slide={false} use kre or effect k liye fade use kre  */}
              <Carousel fade>
                 <Carousel.Item interval={500}>
                    <img  src='Images/Pic1.jpg'
                     className='d-block w-100' width='350' height='350'/>
                    <Carousel.Caption>
                        <h3>First Image</h3>
                        <p>Description of first Image</p>
                    </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item interval={500}>
                    <img src='Images/Pic2.jpg' 
                     className='d-block w-100' width='350' height='350'/>
                    <Carousel.Caption>
                        <h3>Second Image</h3>
                        <p>Description of Second Image</p>
                    </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item interval={500}>
                    <img src='Images/Pic3.jpg' 
                    className='d-block w-100' width='350' height='350'/>
                    <Carousel.Caption>
                        <h3>Third Image</h3>
                        <p>Description of Third Image</p>
                    </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item interval={500}>
                    <img src='Images/Pic4.jpg'
                    className='d-block w-100' width='350' height='350'/>
                    <Carousel.Caption>
                        <h3>Fourth Image</h3>
                        <p>Description of Fourth Image</p>
                    </Carousel.Caption>
                 </Carousel.Item>
              </Carousel>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyCarousel
