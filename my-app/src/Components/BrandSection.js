import React from 'react';
import Container from 'react-bootstrap/Container';
import brandImage from '../Images/brandImage.jpg';
import brandImage1 from '../Images/brandImage1.jpg';

const BrandSection = () => {
  return (
    <>
        <Container>
        <div className="brand">
            <div className="leftSection">
                <img src={brandImage} alt="" className='leftt' />
            </div>

            <div className="rightSection">
                <div className="up">
                    <h1>Franchise Information</h1>
                    <p>We are looking for master franchisee !</p>
                    <button className='butn'>LEARN MORE</button>
                </div>

                <div className="down">
                    <img src={brandImage1} alt="" className='rightt'/>
                </div>
            </div>
        </div>
        </Container>
    </>
  )
}

export default BrandSection