import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CpMenu from './componentes/CpMenu';

import { Button } from 'react-bootstrap';

import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { sistemas: [] };

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount = () => {
    axios.get('http://www.mocky.io/v2/5acab06c2e00004d00bbaa0d')
      .then(function (response) {
        console.log('Response: ', response.data)
        this.setState({ sistemas: response.data });
      }.bind(this))
  }

  handleClick = () => {
    console.log('Indo buscar dados');
    axios.get('http://www.mocky.io/v2/5acab06c2e00004d00bbaa0d')
      .then(function (response) {
        this.setState({ sistemas: response.data });
      }.bind(this))
  }

  render() {
    return (
      <div>
        <CpMenu />
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
              {
                this.state.sistemas.map(function (sistema) {
                  return (
                    <ul key={sistema.id}>{sistema.nome}</ul>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
