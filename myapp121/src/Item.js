import React, {Component} from 'react';

import './App.css';

class Item extends Component {
  render() {
    const {name,amount,price,id} = this.props.item;
    return (
      <div className="item">
        <label>{name} - ${price} x {amount}</label><br></br>
        {
          amount > 0 ? <button onClick={e => this.props.onAdd(id)}>Add to Cart</button>
          : <button disabled>Add to Cart</button>
        }
      </div>
    )
  }
}

export default Item;