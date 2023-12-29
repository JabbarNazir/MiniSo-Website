import React from 'react';
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import slide from '../Images/slide.jpg';
import slide1 from '../Images/slide1.jpg';
import slide2 from '../Images/slide2.jpg';
import slide3 from '../Images/slide3.jpg';

const Carousal = () => {
  return (
    <>
    <Container>
        <Carousel>
            <Carousel.Item>
            <img src={slide1} alt=""  className='sliderr'/>
            </Carousel.Item>

            <Carousel.Item>
            <img src={slide2} alt=""  className='sliderr'/>
            </Carousel.Item>

            <Carousel.Item>
            <img src={slide3} alt=""  className='sliderr'/>
            </Carousel.Item>

            <Carousel.Item>
                <img src={slide} alt=""  className='sliderr'/>
            </Carousel.Item>
        </Carousel>
    </Container>
    </>
  )
}

export default Carousal