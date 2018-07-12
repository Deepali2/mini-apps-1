import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: 0,
    }
    this.incrementPage = this.incrementPage.bind(this);
    this.getText = this.getText.bind(this);
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
  //get the appropriate text for the button
  getText() {
    return this.state.page === 0 ? 'CHECKOUT' : 'NEXT';      
  }

  render() {
    console.log('currentPage:', this.state.page);
    return (
      <div className="App">
        
        {this.state.page === 1 && <Form1 />}
        {this.state.page < 4 && <button onClick={this.incrementPage}>{this.getText()}</button>}

        
        
      </div>
    );
  }
}




class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state= {
      nameValue: '',
      email:'',
      password:'',
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ nameValue: event.target.value });
  }
  
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }


  render() {
    console.log('nameValue:', this.state.nameValue );
    return (
      <div> 
        <input 
          type="text" 
          name="name" 
          value={this.state.nameValue}
          onChange={this.handleNameChange}
          placeholder="first and last name" 
        />
       
        <input 
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          placeholder="email"  
        
        />

        <input
          type="text"
          name="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          placeholder="password"

        />
        
      </div>
    );
  }

}

export default App;





//onChange={(event) => {this.setState({name: event.target.value})}}