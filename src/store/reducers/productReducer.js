import { GET_FEATURED_PRODUCTS } from '../actions/productActions';

const initialState = {
    featuredProducts: [],
    allProducts: []
}

const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_FEATURED_PRODUCTS:
            return {
                ...state,
                featuredProducts: action.featuredProducts
            }
        default:
            return state;
        
    }
}

export default productReducer;

