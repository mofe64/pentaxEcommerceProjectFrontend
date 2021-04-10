import Header from '../components/header';
import '../css/home.css';
// import bg from '../assets/banner-img.webp';
import cg1 from '../assets/c1.webp';
import cg2 from '../assets/c2.webp';
import cg3 from '../assets/c3.webp';
import cg4 from '../assets/c4.webp';
import cg5 from '../assets/c5.webp';
import Footer from '../components/footer';
import ProductCard from '../components/productCard';
import React, {useEffect, useState, useCallback } from 'react';
import LoadingAnimation from '../components/loadingAnimation';
import {withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTruck, faUndo, faHeadset, faCreditCard, } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import * as productActions from '../store/actions/productActions';

const Home = withRouter(function ({history}) {
    const featuredProducts = useSelector(state => state.products.featuredProducts)
    const [dataLoaded, setDataLoaded] = useState(false);
    const dispatch = useDispatch();

    const loadFeaturedProducts = useCallback(async () => {
        try {
            await dispatch(productActions.getFeaturedProducts());
        } catch (err) {
            console.log(err);
        }
    },[dispatch])

    useEffect(() => {
        setDataLoaded(false);
        loadFeaturedProducts().then(()=>setDataLoaded(true))
    },[dispatch, loadFeaturedProducts])
    if (dataLoaded) {
        return (
            <>
                <Header />
                <div className='home-container'>
                    <div className='hero'>
                        <div className='hero-content'>
                            <div className='hero-left'>
                                <h1>Featured</h1>
                                <h1>{ featuredProducts[featuredProducts.length -1].name}</h1>
                                <p>
                                   {featuredProducts[featuredProducts.length -1].description}
                                </p>
                                <div className='hero-left-cta'>
                                    <button className='cta-btn'>
                                        <FontAwesomeIcon icon={faPlus} className='cta-icon' />
                                    </button>
                                    <p>Add to Bag</p>
                                </div>
                            </div>
                            <div className='hero-right'>
                                <img src={featuredProducts[featuredProducts.length -1].image} alt='header' className='hero-image' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='features'>
                    <div className='features-box'>
                        <div className='delivery feature'>
                            <FontAwesomeIcon icon={faTruck} className='feature-icon' />
                            <h5>Delivery across Africa</h5>
                            <p>We deliver to all locations across Africa</p>
                        </div>
                        <div className='return feature'>
                            <FontAwesomeIcon icon={faUndo} className='feature-icon' />
                            <h5>Return Policy</h5>
                            <p>Don't like your item, return in 7 days for full cash back</p>
                        </div>
                        <div className='support feature'>
                            <FontAwesomeIcon icon={faHeadset} className='feature-icon' />
                            <h5>24/7 Support</h5>
                            <p>Our customer support team is available 24/7</p>
                        </div>
                        <div className='payment feature'>
                            <FontAwesomeIcon icon={faCreditCard} className='feature-icon' />
                            <h5>Secure Payment</h5>
                            <p>Fast and secure payments in all currencies</p>
                        </div>
                    </div>
                </div>
                <div className="categories">
                    <div className='category-box'>
                        <div className='categories-left'>
                            <div className='category-left-top'>
                                <div>
                                    <img src={cg1} alt='category1' />
                                </div>
                                <div>
                                    <img src={cg2} alt='category2' />
                                </div>
                            </div>
                            <div className='category-left-bottom'>
                                <div>
                                    <img src={cg3} alt='category3' />
                                </div>
                                <div>
                                    <img src={cg4} alt='category4' />
                                </div>
                            </div>
                        </div>
                        <div className='category-right'>
                            <img src={cg5} alt='category5' />
                        </div>
                    </div>
                </div>
                <div className='products-home'>
                    <div className='products-home-top'>
                        <h1>Latest Products</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et
                        </p>
                    </div>
                    <div className='products-home-bottom'>
                        {featuredProducts.map(product => {
                            return <ProductCard key={product.id} product={ product} onClick={()=>history.push(`/${product.id}`) }/>
                           
                        })}
                    </div>
                </div>
                <Footer />
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


export default Home;