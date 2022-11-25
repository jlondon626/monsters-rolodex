import { Component , useState } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: {
        firstname: 'Jack',
        lastname: 'London'},
      company: 'Deloitte'
    }
  }  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}</p>
          <button 
            onClick={() => {
              this.setState((state, props) => {
                return {
                  name: {firstname: 'Sarah', lastname: 'Penn' },
                  company: 'Pladis'
                }
              }, () => {
                console.log(this.state)
              });
            }}>
            Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
