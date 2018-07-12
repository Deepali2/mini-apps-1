import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: 0,
    }
    this.incrementPage = this.incrementPage.bind(this);
  }
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  incrementPage() {
    this.setState(prevState => 
      ({ page: prevState.page + 1 })
    
    );
  }
  render() {
    console.log('currentPage:', this.state.page);
    return (
      <div className="App">
        {this.state.page === 0 && <button onClick={this.incrementPage}>Checkout</button>}
        
        {this.state.page === 1 && <Form1 />}
        
        
      </div>
    );
  }
}




class Form1 extends Component {
  render() {
    return (
      <div> FORM1
      </div>
    );
  }

}

export default App;
