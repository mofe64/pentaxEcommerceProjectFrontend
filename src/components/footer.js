import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <div className='footer-body'>
                <div className='footer-container'>
                    <div className='footer-about-us footer-section'>
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur <br/> adipisicing elit,
                        sed do eiusmod tempor <br/> incididunt ut labore dolore magna aliqua.
                    </p>
                </div>
                <div className='footer-email footer-section'>
                    <h1>NewsLetter</h1>
                    <p>Stay up to date with the latest</p>
                    <div className='sub-box'>
                        <input type='email' placeholder='Enter Email' />
                        <button>
                            <FontAwesomeIcon icon={faArrowRight }/>
                        </button>
                    </div>
                </div>
                <div className='footer-social footer-section'>
                    <h1>Follow Us</h1>
                    <p>Lets be Social</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer;