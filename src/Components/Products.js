import { Component } from "react";
import Product from "./Product";
import products from "../products.json";
import { Container, Row, Col } from "react-bootstrap";



class Products extends Component {



  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "PC Lenovo",
        price: "1400",
        img: "product1.webp",
        like: 0,
        quantity: 10,
        description:
          "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
      },
    };
  }



  render() {
    return (
      <Container style={{marginTop:'2rem'}}>
        <Row>
          {products.map((product, index) => (
            <Col style={{margin: '1rem'}}key={index} lg={3}>
              <Product  product={product}></Product>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}


export default Products;
