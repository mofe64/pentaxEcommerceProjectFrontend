import Header from '../components/header';
import '../css/productDetail.css';
import Footer from '../components/footer';
import * as productActions from '../store/actions/productActions';
import {addToCart } from '../store/actions/cartActions';
import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingAnimation from '../components/loadingAnimation';
import PageHeader from '../components/pageHeader';
import Notification from '../components/notification';

const ProductDetail = function ({ match }) {
    const [productId] = useState(match.params.productId);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const product = useSelector(state => state.products.allProducts.find(prod => prod.id === productId))
    const dispatch = useDispatch();

    const fetchProductDetails = useCallback( async () => {
        if (!product) {
            setDataLoaded(false);
            dispatch(productActions.findAProduct(productId));
            setDataLoaded(true);  
        }   
    }, [dispatch, productId, product])
    
    const handleQunatityChange = (newQuanity) => {
        setQuantity(newQuanity)
    }
    const addProductToCart = (currentProduct, productQuantity) => {
        dispatch(addToCart(currentProduct, productQuantity));
        setAddedToCart(true);

    }
    useEffect(() => {
        setDataLoaded(false)
        fetchProductDetails().then(setDataLoaded(true))
    }, [fetchProductDetails])
    


    if (!dataLoaded || !product) {
        return (
            <div>
                <LoadingAnimation/>
            </div>
        )
    }

    return (
        <>
            <Header />
            <PageHeader displayText="Product Details" />
            {addedToCart && <Notification success={true} text={`${product.name} added to cart successfully`} />}
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
                            <input type='number'
                                placeholder='quantity'
                                value={quantity}
                                onChange = {event =>handleQunatityChange(event.target.value)}
                            />
                        </div>
                        <div className='product-cta'>
                            <button className='add-to-cart-btn'
                                onClick={() => {
                                    addProductToCart(product, quantity)
                                }}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
    
}

export default ProductDetail;