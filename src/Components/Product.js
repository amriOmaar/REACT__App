import { Alert } from "bootstrap";
import { Component } from "react";
import { Card, Button } from "react-bootstrap";


class Product extends Component {


    constructor(props){
        super(props);
        this.state = {
            product: props.product
        }
        this.addLike= this.addLike.bind(this)
        this.buy = this.buy.bind(this);

    }

    addLike (e){
      e.preventDefault();  
      this.setState((oldState)=>({
        product: {...oldState.product,
            like: oldState.product.like+1}
      })
      )
    }

    buy() {
      console.log("buy");
      this.props.product.quantity--;
      this.setState({ product: this.props.product });
  }

  render() {
    return (
      <>
      <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src={require("../assets/images/" + this.props.product.img)}
        />
        <Card.Body>
          <Card.Title>{this.props.product.name}</Card.Title>
          <Card.Subtitle>{this.props.product.description}</Card.Subtitle>
          <Card.Subtitle>Price : {this.props.product.price}</Card.Subtitle>
          <Card.Subtitle>Quantity : {this.state.product.quantity}</Card.Subtitle>
          <Card.Subtitle>{this.state.product.like} Likes</Card.Subtitle>
        </Card.Body>
        <Card.Footer>
           <Button variant="primary" onClick={this.addLike} >Like</Button>
           <Button variant="primary" disabled={this.props.product.quantity == 0} onClick={this.buy} >buy</Button>
        </Card.Footer>
      </Card>
      </>
      
    );
  }
}




export default Product;
