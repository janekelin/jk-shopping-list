import Form from './Form';
import List from './List';
import React, { Component } from 'react';

const URL_SEARCH = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';
const FORMAT_RESPONSE = '&format=json&origin=*';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentProduct: '',
      currentQuantity: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
  };
  
  handleChange(e){
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    if(!this.state.currentProduct.length){
      return;
    }

    const URL = URL_SEARCH + this.state.currentProduct + FORMAT_RESPONSE;
    const {currentProduct, currentQuantity} = this.state;
    
    fetch(URL)
      .then(response => response.json())
      .then(response => {
      this.setState({items: [...this.state.items, {
        product: currentProduct,
        quantity: currentQuantity,
        link: response[3][0]
      }]});
    });
  }
  
  removeItem (index) {
    const {items} = this.state;
    
    this.setState({
      items: items.filter((item, i) => {
        return i !== index;
      }),
    });
  }
  
  render() { 
    return (
      <div className="container">
        <header className="row bg-info text-white">
          <h1 className="col-sm-12">Minimalistic Shopping List</h1>
        </header>
        <List 
          className="row"
          itemsData={this.state.items} 
          removeItem={this.removeItem}
        />
        <Form 
          className="row"
          currentProduct={this.currentProduct}
          currentQuantity={this.currentQuantity}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
