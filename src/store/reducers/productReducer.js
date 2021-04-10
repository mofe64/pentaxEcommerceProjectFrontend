import { GET_FEATURED_PRODUCTS,GET_ALL_PRODUCTS_IN_CATEGORY } from '../actions/productActions';

const initialState = {
    featuredProducts: [],
    productsInACategory: [],
    allProducts: [],
    searchedProducts:[]
}

const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_FEATURED_PRODUCTS:
            return {
                ...state,
                featuredProducts: action.featuredProducts,
                allProducts: state.allProducts.concat(action.featuredProducts)
            }
        case GET_ALL_PRODUCTS_IN_CATEGORY:
            return {
                ...state,
                productsInACategory: action.categoryProducts
            }
        default:
            return state;
        
    }
}

export default productReducer;

