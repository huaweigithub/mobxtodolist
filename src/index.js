import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppStore from "./store/index";


ReactDOM.render(<App store={AppStore} />, document.getElementById('root'));


