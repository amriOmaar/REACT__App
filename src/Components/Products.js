import { Component } from "react";
import Product from "./Product";
import products from "../products.json";
import { Alert, Container, Row, Col } from "react-bootstrap";




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
        {
        this.state.showAlert && (<Alert variant="success " >
                    <div className="d-flex flex-column">
                        <div className="justify-content-start">
                            <div>
                                <p>Welcome to our shop <b>MyStore</b> </p>
                            </div>
                            <div>
                                <p>thank you for choosing our store we hope you enjoy your shopping experience </p>

                            </div>
                        </div>
                    </div>
                </Alert>)
                }
        <Row>
          {products.map((product, i) => (
            <Col style={{margin: '1rem'}} key={i} lg={3}>
              <Product  product={product}></Product>
            </Col>
          ))}
        </Row>
        {this.state.purchaseConfirmed && <Alert variant="primary" > you bought an item </Alert>}
      </Container>
    );
  }
}


export default Products;
