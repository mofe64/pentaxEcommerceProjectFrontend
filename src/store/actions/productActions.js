const axios = require('axios').default;

export const GET_FEATURED_PRODUCTS = 'GET_FEATURED_PRODUCTS';
export const GET_ALL_PRODUCTS_IN_CATEGORY = 'GET_ALL_PRODUCTS_IN_CATEGORY';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';


export const getFeaturedProducts = () => {
    return async (dispatch) => {
        const response = await axios.get('https://pentazon.herokuapp.com/api/v1/product/all');
        // console.log(response)
        dispatch({type: GET_FEATURED_PRODUCTS, featuredProducts: response.data})
    }
}