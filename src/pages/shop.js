import '../css/shop.css';
import ProductCard from '../components/productCard';
import Footer from '../components/footer';
// import { getCategories, getProductsForACategory } from '../service/product';
import LoadingAnimation from '../components/loadingAnimation'
import Header from '../components/header';
import { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import PageHeader from '../components/pageHeader';

import { useSelector, useDispatch } from 'react-redux';
import * as categoryActions from '../store/actions/categoryActions';
import { fetchProductsInACategory } from '../store/actions/productActions';

import * as logger from '../util/logger';
    
const Shop = withRouter(function ({ history }) {
    const categories = useSelector(state => state.categories.categories)
    const categoryProducts = useSelector(state => state.products.productsInACategory)
    const [dataLoaded, setDataLoaded] = useState(false)
    const [activeCategory, setActiveCategory] = useState(0);
    const dispatch = useDispatch();

    const changeActiveCategory = (categoryIndex) => {
        logger.logInfo(`setting new category ${categoryIndex}`);
        setActiveCategory(categoryIndex);
    }

    const loadCategories = useCallback(async () => {
        try {
            dispatch(categoryActions.getCategories())
        } catch (err) {
            console.log(err)
        }
    }, [dispatch])

    const getProductsInACategory = useCallback(async () => {
        try {
            if (categories.length !== 0) {
            let categoryId = categories[activeCategory].id
                dispatch(fetchProductsInACategory(categoryId))
                // logger.logInfo(categoryProducts)
            }  
        } catch (err) {
            console.log(err)
        }
    },[dispatch,activeCategory, categories])
    
    useEffect(() => {
        setDataLoaded(false);
        loadCategories();
        setDataLoaded(true)
    }, [loadCategories])

    useEffect(() => {
        if (categories.length > 0) {
            getProductsInACategory();
        }
        setDataLoaded(true)
    },[categories, getProductsInACategory, activeCategory])
    

    if(!dataLoaded || categories.length === 0) {
        return (
            <div>
                <LoadingAnimation />
            </div>
        )
    }
        return (
            <>
                <Header />
               <PageHeader displayText="Shop till you drop "/>
                <div className='shop-main'>
                    <div className='main-left'>
                        <div className='category-header'>
                            <h4>Browse Catgories</h4>
                        </div>
                        {categories.map((category,i) => {
                            return (
                                <div key={category.id} className='category'
                                    onClick={ ()=> {changeActiveCategory(i)}}
                                >
                                    <h4>{ category.name}</h4>
                                </div>
                            )
                        })}
                    </div>
                    <div className='main-right'>
                        <div className='product-container'>
                            <div className='container-header'>
                                <div className='header-left'>
                                    <div className='filter'>
                                        <label htmlFor='filter'></label>
                                        <select name='filter' defaultValue='default'>
                                            <option value='price'>Price</option>
                                            <option value="default">Default</option>
                                        </select>
                                    </div>
                                    <div className='filter'>
                                        <label htmlFor='filter'></label>
                                        <select name='filter' defaultValue='show 20'>
                                            <option value='Show 20'>Show 20</option>
                                            <option value="Show 10">Default</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                <div className='header-right'>
                                    <ul>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='products-shop'>
                                {(dataLoaded) ? categoryProducts.map(((product, i) => {
                                    return (
                                        <ProductCard  key={i} product={product} onClick={()=>history.push(`/${product.id}`) }/>
                                    )
                                })): <LoadingAnimation/> }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    
    
})

export default Shop