import Header from '../components/header';
import PageHeader from '../components/pageHeader';
import Footer from '../components/footer';
import '../css/cart.css';
import { useSelector } from 'react-redux';
import {useState } from 'react';
import { useHistory } from 'react-router-dom';
// import * as logger from '../util/logger';

const Cart = () => {
    let cart;
    cart = useSelector(state => state.cart.cart);
    let cartItems = cart["items"];
    let cartItemKeys = Object.keys(cart["items"])
    const [canCheckout] = useState(cartItemKeys.length > 0);
    const history = useHistory();
    return (
        <>
            <Header />
            <PageHeader />
            <div className='cart-container'>
                <div className='cart-header'>
                    <h6>Cart Items</h6>
                </div>
                {(cartItemKeys.length > 0)?Object.keys(cart["items"]).map((key,i) => {
                        return <div className='cart-item' key={i}>
                                <img src={cartItems[key].product.image}  alt="product"/>
                                <h1>{ cartItems[key].product.name}</h1>
                                <input type='number' value={cartItems[key].quantity } readOnly/>
                                <p>{ cartItems[key].total}</p>
                    </div>
                }): <p>No Items In Cart Yet</p>
                
            }
                         
                <div className='cart-total'>
                    <div className='cart-total-value'>
                        <p>Total: </p>
                        <span>
                            <p>{ cart['totalAmount']}</p>
                        </span>
                        
                    </div>
                </div>
                <div className='to-checkout'>
                    <button className='to_shop_btn' onClick={()=>{history.push('/shop')}}>
                        Continue Shopping
                    </button>
                    { canCheckout && <button className='to_checkout_btn' onClick={() => { history.push('/checkout') }}>
                        Proceed to Checkout
                    </button>}
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default Cart;