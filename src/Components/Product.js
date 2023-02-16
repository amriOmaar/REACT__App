import { Component } from "react";
import { Card, Button,Alert } from "react-bootstrap";
class Product extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            product: props.product
        }
        this.addLike= this.addLike.bind(this)
    }
    addLike (e){
      e.preventDefault();  
      this.setState((oldState)=>({
        product: {...oldState.product,
            like: oldState.product.like+1}
      }) 
      )
    }
    
  render() {
    return (
      <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src={require("../assets/images/" + this.props.product.img)}
        />
        <Card.Body>
          <Card.Title>{this.props.product.name}</Card.Title>
          <Card.Subtitle>{this.props.product.description}</Card.Subtitle>
          <Card.Subtitle>Price: {this.props.product.price}</Card.Subtitle>
          <Card.Subtitle>Nb Likes: {this.state.product.like}</Card.Subtitle>
          <Card.Subtitle>quantity: {this.props.product.quantity}</Card.Subtitle>
          <Button onClick={this.addLike} variant="primary">
like
          </Button>
          <Button  onClick={()=> this.props.onClick(this.props.product)} disabled={this.props.product.quantity<1} variant="secondary">
                Buy
          </Button>
        </Card.Body>
        <Alert variant="danger" show={this.props.product.quantity<1}>Out of stock</Alert>
      </Card>
    );
  }
}
export default Product;
