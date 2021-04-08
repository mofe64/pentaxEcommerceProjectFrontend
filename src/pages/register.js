
import Header from '../components/header';
import PageHeader from '../components/pageHeader'
import Footer from '../components/footer';
import '../css/register.css';

const RegisterPage = ()=> {
    return(
        <>
            <Header/>
            <PageHeader/>
            <div className="container-register">
                <div className='register-form-container'>
                    <div className="image">
                        <div className='image-text'>
                            <h2>New to our website?</h2>
                            <p>There are advances being made in science and technology
                             everyday, and a good example of this is the ....
                            </p>
                            <button>CREATE AN ACCOUNT</button>
                        </div>
                    </div>
                    <div className="register">
                        <form  className='register-form'>
                            <h3>Register an account</h3>
                            <div className='form-control-double'>
                                <input type="text" placeholder="Firstname" required/>
                                <input type="text" placeholder="Lastname"required/>
                            </div>
                            <div className='form-control-full'>
                                <input type='email' placeholder='email' required />
                            </div>
                            <div className='form-control-double'>
                                <input type="password" placeholder="Enter Password"required/>
                                <input type="password" placeholder="Repeat Password"required/>
                            </div>
                            <div className="checking">
                                <div className="box">
                                    <input type="checkbox" id="check" required></input>
                                </div>
                            <div className="label">
                                <label for="check">By creating an account you agree to our Terms & Privacy</label>
                            </div>
                        </div>
                        <button type="submit">Register</button>
                    <div class="signin">
                        <p>Already have an account? <a href="/login">Sign in</a>.</p>
                    </div>

                    </form>
                </div>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}
export default RegisterPage;