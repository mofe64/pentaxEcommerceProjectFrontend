import Header from '../components/header';
import '../css/home.css';
import bg from '../assets/banner-img.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = function () {
    return (
        <>
            <Header />
            <div className='home-container'>
                <div className='hero'>
                    <div className='hero-content'>
                        <div className='hero-left'>
                            <h1>Nike New Collection!</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>
                            <div className='hero-left-cta'>
                                <button className='cta-btn'>
                                    <FontAwesomeIcon icon={faPlus} className='cta-icon'/>
                                </button>
                                <p>Add to Bag</p>
                            </div>
                        </div>
                        <div className='hero-right'>
                            <img src={ bg} alt='header' className='hero-image'/>
                        </div>
                    </div>
                </div>
                <div >
                    <h1>Test</h1>
                </div>
            </div>
        </>
    )
}


export default Home;