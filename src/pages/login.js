import login from '../assets/login.webp';
import Header from '../components/header';
import pageHeader from '../components/pageHeader';
import Footer from '../components/footer';
import PageHeader from '../components/pageHeader';
import '../css/login.css';

const Login = ()=> {
    return(
        <>
            <Header/>
            <PageHeader/>
                <div className="container">
                    <div className="image_side">
                        <h1 className="first_line1">New to our website?</h1>
                        <h5 className="h5">There are advances being made in science and technology</h5>
                        <h5 className="h5">everyday, and a good example is the</h5>
                        <a href="" class="alink">CREATE AN ACCOUNT</a>
                    </div>

                    <div className="login_side">
                        <h2 className="first_line2">LOG IN TO ENTER</h2>
                        <div className="username">
                            <input type="text" name="text" id="text" placeholder="Username"/>
                        </div>

                        <div className="password">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </div>

                        <div>
                            <label for="membership">Keep me logged in</label>
                            <input type="checkbox" name="login" value="login" id="login"/> 
                        </div>

                        <div className="Login_link">
                            <a href="#" class="login_link">LOG IN</a>
                        </div>
                        <div className="forgot_password">
                            <a href="#" class="forgot_password">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}
export default Login;
