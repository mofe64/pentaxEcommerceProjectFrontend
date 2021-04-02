import registerImage from '../assets/login.webp';
import Header from '../components/header';
import PageHeader from '../components/pageHeader'
import Footer from '../components/footer';
import '../css/register.css';

const RegisterPage = ()=> {
    return(
        <>
            <Header/>
            <PageHeader/>
            <div className="overall">
                <div className="image">
                    <div >
                        <h2><b>New to our website?</b></h2>
                        <p>There are advances being made in science and technology</p>
                        <p>everyday, and a good example of this is the</p>
                        <button>CREATE AN ACCOUNT</button>
                    </div>
                </div>
                <div className="register">
                    <form>
                    <h3><b>Register an account</b></h3>
                    <input type="text" placeholder="Enter Email"required></input>
                    <input type="password" placeholder="Enter Password"required></input>
                    <input type="password" placeholder="Repeat Password"required></input>
                    
                    <div className="checking">
                        <div className="box">
                            <input type="checkbox" id="check" required></input>
                        </div>
                        <div className="label">
                            <label for="check">By creating an account you agree to our <a href="#">Terms & Privacy</a></label>
                        </div>
                    </div>
                    
                    <button type="submit">Register</button>

                    <div class="signin">
                        <p>Already have an account? <a href="#">Sign in</a>.</p>
                    </div>

                    </form>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}
export default RegisterPage;