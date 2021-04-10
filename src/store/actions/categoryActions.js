import axios from "axios";

export const GET_CATEGORIES = 'GET_CATEGORIES';


export const getCategories = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://pentazon.herokuapp.com/api/v1/category/all`)
        const categories = await response.data;
        dispatch({type: GET_CATEGORIES, categories: categories})
        
    }
}
