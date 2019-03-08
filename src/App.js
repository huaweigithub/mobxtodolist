import React, { Component } from 'react';
import './App.css';
import List from "./component/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <div className="border-parent">
          <List />
        </div>
      </div>
    );
  }
}

export default App;
