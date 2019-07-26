import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <hr></hr>
        <h3>Your Cart</h3>
        <p>Please add some products to cart.</p>
        <p>Total: ${this.props.total}</p>
        <button onClick={this.props.onReset}>Checkout</button>
      </div>
    )
  }
}

export default Footer;