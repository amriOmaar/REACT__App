import React from 'react'
import { useState } from 'react';
import { Card, Button,Alert } from "react-bootstrap";

function Product1(props) {
    const [like,setLike] = useState(props.product.like)

    const addLike = (e) =>{
        e.preventDefault();  
        setLike(
            like+1
        )
      }

  return (
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src={require("../assets/images/" + props.product.img)}
          />
          <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Subtitle>{props.product.description}</Card.Subtitle>
            <Card.Subtitle>Price: {props.product.price}</Card.Subtitle>
            <Card.Subtitle>Nb Likes: {like}</Card.Subtitle>
            <Card.Subtitle>quantity: {props.product.quantity}</Card.Subtitle>
            <Button onClick={addLike} variant="primary">
  like
            </Button>
            <Button  onClick={()=> props.onClick(props.product)} disabled={props.product.quantity<1} variant="secondary">
                  Buy
            </Button>
          </Card.Body>
          <Alert variant="danger" show={props.product.quantity<1}>Out of stock</Alert>
        </Card>
      );
    
}

export default Product1