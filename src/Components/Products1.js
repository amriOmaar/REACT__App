import React from 'react'
import Product1 from './Product1';
import products from "../products.json";
import { Container, Row, Col,Alert } from "react-bootstrap";
import { useState } from 'react';
import { useEffect } from 'react';

function Products1() {
    const [showBoughtAlert,setBoughtAlert] = useState(false)
    const [showWelcomeAlert,setWelcomeAlert] = useState(false)

    useEffect(()=>{
        setWelcomeAlert(true)
        
      setTimeout(() => {
        setWelcomeAlert(false)
     }, 3000);
     return ()=> {console.log("Unmount")}
    },[])

    const BuyProduct = (product) =>{
        product.quantity--;
        setBoughtAlert(true);
        setTimeout(()=>{
            setBoughtAlert(false);
        },2000)
    } 

  return (
    <>
      <Alert show={showWelcomeAlert} variant="success">
        hey, welcome To our shop <b>My Store</b>
      </Alert>
      <Container style={{marginTop:'2rem'}}>
        <Row>
          {products.map((product, index) => (
            <Col style={{margin: '1rem'}} key={index} lg={3}>
              <Product1 onClick={BuyProduct} product={product}></Product1>
            </Col>
          ))}
        </Row>
        
      </Container>
      
      <Alert show={showBoughtAlert} >
        You bought an Item
      </Alert>
      </> )
}

export default Products1