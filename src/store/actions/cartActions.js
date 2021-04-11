// import * as logger from '../../util/logger';
// const axios = require('axios').default;

export const ADD_TO_USER_CART = 'ADD_TO_USER_CART';
export const REMOVE_FROM_USER_CART = 'REMOVE_FROM_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const CLEAR_USER_CART = 'CLEAR_USER_CART';


export const addToCart = (product, quantity) => {
    return {type: ADD_TO_CART, product: product, quantity: quantity}
}

export const removeFromCart = (productId) => {
    return {type: REMOVE_FROM_CART, productId: productId}
}
export const clearCart = () => {
    return{type: CLEAR_CART}
}

