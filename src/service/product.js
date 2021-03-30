const axios = require('axios').default;

export const getFeaturedProducts = async function () {
    try {
        const featuredProducts = await axios.get('https://pentazon.herokuapp.com/api/v1/product/all');
        return featuredProducts;
    } catch (error){
        console.log(error);
        return [];
    }
}

export const getProductsForACategory = async function (categoryId) {
    try {
        const products = await axios.get(`https://pentazon.herokuapp.com/api/v1/product/all/${categoryId}`)
        return products.data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

export const getCategories = async function () {
    try {
        const categories = await axios.get(`https://pentazon.herokuapp.com/api/v1/category/all`)
        return categories.data;
    } catch (error) {
        console.log("service error");
        console.log(error)
        return []
    }
}

export const getAProduct = async (productId) => {
    try {
        const product = await axios.get(`https://pentazon.herokuapp.com/api/v1/product/${productId}`)
        return product.data;
    } catch (err) {
        console.log(err);
        return{}
    }
}