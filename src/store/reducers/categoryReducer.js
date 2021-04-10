import { GET_CATEGORIES } from '../actions/categoryActions';

const initialState = {
    categories: [],
}

const categoryReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
            }
        default:
            return state;
        
    }
}

export default categoryReducer;