import React , {Component} from 'react';
import Item from './Item';
import Header from './Header';
import './App.css';
import Footer from './Footer';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      total : 0.0, 
      data: [
        {id: 0, name: "AK 47", price: 1800, amount: 3},
        {id: 1, name: "M 16", price: 2700, amount: 5},
        {id: 2, name: "AK 36", price: 1600, amount: 2},
      ]
    };
  }

  addToCart(id) {
    if (this.state.data[id].amount === 0) return ;
    this.setState((prevState, props) => {
      return {total: prevState.total + prevState.data[id].price};
    })
    
    this.setState((prevState, props) => {
      let tempData = prevState.data;
      tempData[id].amount -- ;
      return {data: tempData}
    });
  }

  onReset() {
    this.setState({
      total: 0.0,
      data: [
        {id: 0, name: "AK 47", price: 1800, amount: 3},
        {id: 1, name: "M 16", price: 2700, amount: 5},
        {id: 2, name: "AK 36", price: 1600, amount: 2},
      ]
    });
  }

  render() {
    return (
      <div className="productCart">
        <Header/>
        <h3>Products</h3>
        {
          this.state.data.map(item =>
            <Item 
              item={item}
              key={item.id}
              onAdd={id=>this.addToCart(id)} 
            />
          )
        }
        <Footer total={this.state.total} onReset={() => this.onReset()}/>
      </div>
    )
  }
}

export default App;