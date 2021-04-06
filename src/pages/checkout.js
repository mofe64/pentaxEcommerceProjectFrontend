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
                        <input type="text" placeholder="username" required />
                        <input type='password' placeholder='password' required />
                        <div>
                            <label htmlFor='remember-me'>Remember me</label>
                            <input type='checkbox' name='remember-me'/>
                        </div>
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CheckOut;