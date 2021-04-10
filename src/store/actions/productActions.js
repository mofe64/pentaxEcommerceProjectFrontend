import * as logger from '../../util/logger';
const axios = require('axios').default;

export const GET_FEATURED_PRODUCTS = 'GET_FEATURED_PRODUCTS';
export const GET_ALL_PRODUCTS_IN_CATEGORY = 'GET_ALL_PRODUCTS_IN_CATEGORY';
// export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const FIND_PRODUCT ='FIND_PRODUCT'
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';


export const getFeaturedProducts = () => {
    return async (dispatch) => {
        const response = await axios.get('https://pentazon.herokuapp.com/api/v1/product/all');
        const featuredProducts = await response.data;
        logger.logInfo(featuredProducts)
        dispatch({type: GET_FEATURED_PRODUCTS, featuredProducts: featuredProducts})
    }
}

export const fetchProductsInACategory = (categoryId) => {
    return async (dispatch) => {
        const response = await axios.get(`https://pentazon.herokuapp.com/api/v1/product/all/${categoryId}`);
        const categoryProducts = await response.data;
        logger.logInfo(categoryProducts)
        dispatch({type: GET_ALL_PRODUCTS_IN_CATEGORY, categoryProducts: categoryProducts})
    }
}

export const findAProduct = (productId) => {
    return async (dispatch) => {
        const response = await axios.get(`https://pentazon.herokuapp.com/api/v1/product/${productId}`)
        const product = await response.data;
        logger.logInfo(product)
        dispatch({type: FIND_PRODUCT, product: product})
    }
}

