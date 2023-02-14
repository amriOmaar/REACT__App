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

      this.props.product.quantity--;
      this.setState({ product: this.props.product });
      this.props.onPurchase();
  }

  render() {
    return (
      <>
                <Card style={{ width: '18rem', maxHeight: '30rem' }}>
                    <Card.Img style={{ Width: '9rem', maxHeight: '9rem' }} variant="top" src={"/images/" + this.props.product.img} />
                    <Card.Body>
                        <Card.Title className='p-2'>

                            {this.props.product.name}


                        </Card.Title>
                        <Card.Text >
                            <p className='text-truncate'>

                                {this.props.product.description}
                            </p>
                        </Card.Text>
                        <Card.Text> {this.props.product.price} </Card.Text>
                        <Card.Text>likes: {this.props.product.like}</Card.Text>
                        <Card.Text>quantity: {this.props.product.quantity}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className='d-flex justify-content-between'>
                            <Button variant="primary" onClick={this.like}>Like</Button>
                            <Button variant="primary" disabled={this.props.product.quantity == 0} onClick={this.buy} >buy</Button>
                        </div>
                    </Card.Footer>
                </Card>

            </>
      
    );
  }
}




export default Product;
