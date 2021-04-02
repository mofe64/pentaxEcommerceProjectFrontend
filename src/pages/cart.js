import Header from '../components/header';
import PageHeader from '../components/pageHeader';
import Footer from '../components/footer';
import '../css/cart.css';
import testImage from '../assets/banner-img.webp';
const { useState } = require("react");


const Cart = () => {
    const [cart, setCart] = useState([])
    return (
        <>
            <Header />
            <PageHeader />
            <div className='cart-container'>
                <div className='cart-header'>
                    <h6>Cart Items</h6>
                </div>
                <div className='cart-item'>
                    <img src={testImage} />
                    <h1>Some Product Name</h1>
                    <input type='number' value={5 }/>
                    <p>N 100000</p>
                </div>          
                <div className='cart-total'>
                    <div className='cart-total-value'>
                        <p>Total: </p>
                        <span>
                            <p>1020002</p>
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