import { GET_FEATURED_PRODUCTS,GET_ALL_PRODUCTS_IN_CATEGORY,FIND_PRODUCT} from '../actions/productActions';

const initialState = {
    featuredProducts: [],
    productsInACategory: [],
    allProducts: [],
    searchedProducts: [],
    activeProduct:{}
    
}

const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_FEATURED_PRODUCTS:
            return {
                ...state,
                featuredProducts: action.featuredProducts,
                allProducts: [...new Set(state.allProducts.concat(action.featuredProducts))]
            }
        case GET_ALL_PRODUCTS_IN_CATEGORY:
            return {
                ...state,
                productsInACategory: action.categoryProducts,
                allProducts: [...new Set(state.allProducts.concat(action.categoryProducts))]
            }
        case FIND_PRODUCT:
            return {
                ...state,
                activeProduct: action.product,
                allProducts: state.allProducts.concat(action.product)
            }

        default:
            return state;
        
    }
}

export default productReducer;

