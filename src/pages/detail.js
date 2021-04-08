import Header from '../components/header';
import '../css/productDetail.css';
import Footer from '../components/footer';
import {getAProduct } from '../service/product';
import { useState, useEffect,useCallback } from 'react';
import LoadingAnimation from '../components/loadingAnimation';
import PageHeader from '../components/pageHeader';

const ProductDetail = function ({ match }) {
    const [productId] = useState(match.params.productId);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [product, setProduct] = useState({})
    const fetchProductDetails = useCallback( async () => {
        let product = await getAProduct(productId);
        console.log(product);
        setProduct(product)
        setDataLoaded(true);   
    },[productId])

    useEffect(() => {
       fetchProductDetails()
    },[fetchProductDetails])
    
    if (dataLoaded) {
        
    
        return (
            <>
                <Header />
                <PageHeader displayText="Product Details"/>
                <div className='product-detail-image-area'>
                    <div className='product-detail-image-left'>
                        <div className='product-detail-image'>
                            <img src={product.image} alt='product' style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className='product-detail-image-right'>
                        <div className='product-detail-image-right-content'>
                            <div className='product-name'>
                                <h1> {product.name}</h1>
                            </div>
                            <div className='product-price'>
                                <h2>N {product.price}</h2>
                            </div>
                            <div className='product-meta'>
                                <p>Category : <span>Some category </span></p>
                                <p>Availabilty : In Stock</p>
                            </div>
                            <div className='product-desc'>
                                <p>
                                    {product.description}
                                </p>
                            </div>
                            <div className='product-qty'>
                                <label htmlFor='quantity' >Quantity</label>
                                <input type='number' placeholder='quantity' />
                            </div>
                            <div className='product-cta'>
                                <button className='add-to-cart-btn'>Add to cart</button>
                            </div>
                        </div>
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
}

export default ProductDetail;