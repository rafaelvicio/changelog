import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { sistemas: [] };

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount = () => {
    axios.get('http://www.mocky.io/v2/5acaa5562e00004900bba9f7')
      .then(function (response) {
        console.log('Response: ', response.data)
        this.setState({ sistemas: response.data });
      }.bind(this))
  }

  handleClick = () => {
    console.log('Indo buscar dados');
    axios.get('http://www.mocky.io/v2/5acaa5562e00004900bba9f7')
      .then(function (response) {
        this.setState({ sistemas: response.data });
      }.bind(this))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button className='button' onClick={this.handleClick}>
          Click Me
      </button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ul>
            {this.state.sistemas.map(sistema =>
              <li key={sistema.id}>{sistema.nome}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
