import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Details from '../Details.json';
import superior1 from '../Images/superior1.png';
import superior2 from '../Images/superior2.png';
import superior3 from '../Images/superior3.png';
import superior4 from '../Images/superior4.png';
import superior5 from '../Images/superior5.png';
import superior6 from '../Images/superior6.png';
const ChoiceSection = () => {

    const [items,setItems] =useState(Details);

    const filterName= (categItem) =>{
        const updatedItems = Details.filter((curElem)=>{
            return curElem.category===categItem;
        });

        setItems(updatedItems);
    }

  return (
    <>
    
    <Container>
    <div className="choice">
        <HorizontalRuleIcon />
        <h1>BEST CHOICE</h1>
        <HorizontalRuleIcon />
    </div>

    <div className="icons">
        <div className="icon" onMouseEnter={()=>filterName('HouseHold')}>
            <img src={superior1} alt="" />
            <p>Household Items</p>
        </div>

        <div className="icon" onMouseEnter={()=>filterName('DailyLife')}>
            <img src={superior2} alt="" />
            <p>Daily Life Products</p>
        </div>

        <div className="icon" onMouseEnter={()=>filterName('Health&Beauty')}>
            <img src={superior3} alt=""  />
            <p>Health & Beauty</p>
        </div>

        <div className="icon" onMouseEnter={()=>filterName('FasionAccessories')}>
            <img src={superior4} alt="" />
            <p>Fashion Accessories</p>
        </div>

        <div className="icon" onMouseEnter={()=>filterName('DailyLife')}>
            <img src={superior5} alt="" />
            <p>Digital Products</p>
        </div>

        <div className="icon" onMouseEnter={()=>filterName('DailyLife')}>
            <img src={superior6} alt="" />
            <p>Foods & Beverage</p>
        </div>
    </div>

    <hr />

{/* ------------------Filtering------------------- */}

<div className="filter">

    {
        items.map((e)=>{
            const {id, name, image, description} = e;
            return(
                <>
                <div className="image">
                    <img src={image} alt="" />
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>

                </>
            )
        })
    }

    
</div>

    </Container>
    </>
  )
}

export default ChoiceSection