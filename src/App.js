import React, { Component } from 'react';
import './App.css';
import List from "./component/List";


class App extends Component {
  render() {
    const {store} = this.props;
    console.log('parent store ...', store)
    return (
      <div className="App">
        <h1>TodoList</h1>
        <div className="border-parent">
          <List store={store} />
        </div>
      </div>
    );
  }
}

export default App;
