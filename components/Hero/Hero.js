import React from 'react';
import { Button } from 'react-bootstrap';
import CardComponent from '../Card/CardComponent';
import CardGroup from 'react-bootstrap/CardGroup';
import { products } from '../../products';
export default function Hero() {
  return (
    <>
    <header style={{ paddingLeft: 0 }}>
      <div
        className='text-center bg-image'
        style={{  height: "100vh" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', display: "flex", justifyContent:"center", alignItems:"center" ,height:"100%" }}>
          <div className='d-flex flex-column gap justify-content-between align-items-center h-100 p-5'>
            <div className='text-white' style={{zIndex: 3}} >
              <h1 className='mb-3'> Super cool name of clothes </h1>
              <h4 className='mb-3'> Subheading of the Season</h4>
              <Button variant="dark">SHOP NOW</Button>

            </div>
        <CardGroup>
        {
          products.map( (product, index) => {
            return (
              <CardComponent key={index} product={product} />
            )
          })
        }
        </CardGroup>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}