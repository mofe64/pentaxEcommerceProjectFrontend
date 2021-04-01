import '../css/shop.css';
import ProductCard from '../components/productCard';
import Footer from '../components/footer';
import { getCategories, getProductsForACategory } from '../service/product';
import LoadingAnimation from '../components/loadingAnimation'
import Header from '../components/header';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PageHeader from '../components/pageHeader';
    
const Shop = withRouter( function  ({history}) {
    const [categories, setCategories] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false)
    const [categoryProducts, setCategoryProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(0);
    const changeActiveCategory = (categoryIndex) => {
        setActiveCategory(categoryIndex);
    }
    const fetchData = async () => {
        let cartegoryList = await getCategories()
        setCategories(cartegoryList);
        let activeCategoryProducts = await getProductsForACategory(cartegoryList[activeCategory].id);
        setCategoryProducts(activeCategoryProducts)
        setDataLoaded(true);
           
    }
    useEffect( () => {
       fetchData()
    },
     [activeCategory])
    if (dataLoaded) {
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
                                        <select name='filter'>
                                            <option value="" selected disabled hidden>Default</option>
                                            <option value='price'>Price</option>
                                            <option value="default">Default</option>
                                        </select>
                                    </div>
                                    <div className='filter'>
                                        <label htmlFor='filter'></label>
                                        <select name='filter'>
                                            <option value="" selected disabled hidden>Show 12</option>
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
                                {(dataLoaded) ? categoryProducts.map((product => {
                                    return (
                                        <ProductCard product={product} onClick={()=>history.push(`/${product.id}`) }/>
                                    )
                                })): <LoadingAnimation/> }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    } else {
        return (
            <div>
                <LoadingAnimation/>
            </div>
        )
    }
})

export default Shop