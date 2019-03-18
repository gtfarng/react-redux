import React, { Component } from 'react'
import './App.css'
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore()

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My-App</h1>
        </header>
        <div>
          <Provider store={store}>
           
          </Provider>
        </div>
      </div>
    );
  }
}


