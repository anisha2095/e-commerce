import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './Pages/HomePage'
import ShowCart from './Pages/ShowCart'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

ReactDOM.render(
  // <HomePage />,
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/showCart" component={ShowCart} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
