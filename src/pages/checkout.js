import Header from '../components/header';
import PageHeader from '../components/pageHeader';
import Footer from '../components/footer';
import '../css/checkout.css'


const CheckOut = () => {
    return (
        <>
            <Header />
            <PageHeader />
            <div className='checkout-container'>
                <div className='login-prompt'>
                    <p>Returning Customer?
                        <span>
                           Log in below
                        </span>
                    </p>
                </div>
                <div className='login-section'>
                    <form className='login-form'>
                        <div className='login-input'>
                            <input type="text" placeholder="username" required />
                            <input type='password' placeholder='password' required />
                        </div>
                        <div className='login-actions'>
                             <button type='submit' className='login-btn'>Login</button>
                            <div className='remember-me'>
                                <label htmlFor='remember-me'>Remember me</label>
                                <input type='checkbox' name='remember-me'/>
                            </div>
                        </div>  
                    </form>
                </div>
                <div className='billing'>
                    <div className='billing-details'>
                        <div className='biling-details-header'>
                            <h1>Billing details</h1>
                        </div>
                        <form className='billing-form'>
                            <div className='form-control-double'>
                                <input placeholder='FirstName ' required />
                                <input placeholder='LastName' required />
                            </div>
                            <div className='form-control-full'>
                                <input placeholder='Company Name'/>
                            </div>
                            <div className='form-control-double'>
                                <input placeholder='Phone number ' required />
                                <input placeholder='Email Address' required />
                            </div>
                            <div className='form-control-full'>
                                <input placeholder='Country'/>
                            </div>
                             <div className='form-control-full'>
                                <input placeholder='Address'/>
                            </div>
                             <div className='form-control-full'>
                                <input placeholder='Post Code'/>
                            </div>
                            <div className='create-account'>
                                <label htmlFor='create-account'>Create An Account ?</label>
                                <input type='checkbox' name='create-account'/>
                            </div>
                        </form>
                    </div>
                    <div className='order-details'>
                        <div className='order-details-container'>
                            <div className='order-details-header'>
                                <h1>Your Order</h1>
                            </div>
                            <div className='order-breakdown'>
                                <div className='breakdown-headers'>
                                    <p>Product</p>
                                    <p>Total</p>
                                </div>
                                <div className='order-item'>
                                    <p>product name</p>
                                    <p>Qty</p>
                                    <p>price</p>
                                </div>
                                 <div className='order-item'>
                                    <p>product name</p>
                                    <p>Qty</p>
                                    <p>price</p>
                                </div>
                                 <div className='order-item'>
                                    <p>product name</p>
                                    <p>Qty</p>
                                    <p>price</p>
                                </div>
                                 <div className='order-item'>
                                    <p>product name</p>
                                    <p>Qty</p>
                                    <p>price</p>
                                </div>
                                <div className='subtotal'>
                                    <h1>SUBTOTAL</h1>
                                    <p>145550</p>
                                </div>
                                <div className='shipping'>
                                    <h1>SHIPPING</h1>
                                    <p>free</p>
                                </div>
                                 <div className='total'>
                                    <h1>TOTAL</h1>
                                    <p>1445500</p>
                                </div>
                                <div className='terms'>
                                    <label htmlFor='terms'>Accepted terms and conditions</label>
                                    <input type='checkbox' name='terms'/>
                                </div>
                                <button className='payment-btn'>
                                    Proceed to Paypal
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CheckOut;