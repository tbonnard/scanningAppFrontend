import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import { Provider } from 'react-redux' 
import store from './store'
import { BrowserRouter as Router } from "react-router-dom"
import {createRoot} from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>
);