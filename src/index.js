import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import productReducer from './store/reducers/productReducer';
import categoryReducer from './store/reducers/categoryReducer';
import cartReducer from './store/reducers/cartReducer';

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

