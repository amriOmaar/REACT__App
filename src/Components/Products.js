import { Component } from "react";
import Product from "./Product";
import products from "../products.json";
import { Container, Row, Col,Alert } from "react-bootstrap";
class Products extends Component {
  constructor(props) {
    super(props);
    this.showAlert = false
    this.state = {
      product: products,
      showboughtAlert :false,
      showWelcomeAlert:false,
    };
    this.BuyProduct = this.BuyProduct.bind(this)

  }

  BuyProduct(product){
    this.setState({
      showboughtAlert:true
    })
    setTimeout(() => {
      this.setState({
        showboughtAlert:false
      })
   }, 2000);
   
    product.quantity--
    this.setState((oldstate)=>({
      quantity: oldstate.product.quantity -1
    }))
    
  }
  componentDidMount(){
    this.setState({
      showWelcomeAlert:true
    })
    setTimeout(() => {
      this.setState({
        showWelcomeAlert:false
      })
   }, 3000);
  }

  render() {
    return (
      <>
      <Alert show={this.state.showWelcomeAlert} variant="success">
        hey, welcome To our shop <b>My Store</b>
      </Alert>
      <Container style={{marginTop:'2rem'}}>
        <Row>
          {this.state.product.map((product, index) => (
            <Col style={{margin: '1rem'}} key={index} lg={3}>
              <Product onClick={this.BuyProduct} product={product}></Product>
            </Col>
          ))}
        </Row>
        
      </Container>
      
      <Alert show={this.state.showboughtAlert} >
        You bought an Item
      </Alert>
      </>
    );
  }
}
export default Products;
