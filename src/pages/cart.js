import Header from '../components/header';
import PageHeader from '../components/pageHeader';
import Footer from '../components/footer';
import '../css/cart.css';
import { useSelector } from 'react-redux';
// import * as logger from '../util/logger';

const Cart = () => {
    let cart;
    cart = useSelector(state => state.cart.cart);
    // logger.logInfo("cart")
    // logger.logInfo(cart)
    let cartItemKeys = Object.keys(cart["items"])
    // logger.logInfo("cart keys")
    // logger.logInfo(Object.keys(cart["items"]))
    // logger.logInfo(cart["items"])
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
                                <img src={cart["items"][key].product.image}  alt="product"/>
                                <h1>{ cart["items"][key].product.name}</h1>
                                <input type='number' value={cart["items"][key].quantity } readOnly/>
                                <p>{ cart["items"][key].total}</p>
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
                    <button className='to_shop_btn'> Continue Shopping</button>
                    <button className='to_checkout_btn'>Proceed to Checkout</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default Cart;