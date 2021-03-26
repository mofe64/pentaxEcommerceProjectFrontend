import Header from '../components/header';
import '../css/home.css';
import bg from '../assets/banner-img.webp';
import cg1 from '../assets/c1.webp';
import cg2 from '../assets/c2.webp';
import cg3 from '../assets/c3.webp';
import cg4 from '../assets/c4.webp';
import cg5 from '../assets/c5.webp';
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus, faTruck, faUndo, faHeadset, faCreditCard,
    faShoppingBag, faHeart, faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

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
            </div>
            <div className='features'>
                <div className='features-box'>
                    <div className='delivery feature'>
                        <FontAwesomeIcon icon={faTruck } className='feature-icon'/>
                        <h5>Delivery across Africa</h5>
                        <p>We deliver to all locations across Africa</p>
                    </div>
                    <div className='return feature'>
                        <FontAwesomeIcon icon={faUndo} className='feature-icon'/>
                        <h5>Return Policy</h5>
                        <p>Don't like your item, return in 7 days for full cash back</p>
                    </div>
                    <div className='support feature'>
                        <FontAwesomeIcon icon={faHeadset} className='feature-icon'/>
                        <h5>24/7 Support</h5>
                        <p>Our customer support team is available 24/7</p>
                    </div>
                    <div className='payment feature'>
                        <FontAwesomeIcon icon={faCreditCard} className='feature-icon' />
                        <h5>Secure Payment</h5>
                        <p>Fast and secure payments in all currencies</p>
                    </div>
                </div>
            </div>
            <div className="categories">
                <div className='category-box'>
                    <div className='categories-left'>
                        <div className='category-left-top'>
                            <div>
                                <img src={cg1} alt='category1' />
                            </div>
                            <div>
                                <img src={cg2} alt='category2' />
                            </div>
                        </div>  
                        <div className='category-left-bottom'>
                            <div>
                                <img src={cg3} alt='category3' />
                            </div>
                            <div>
                                <img src={cg4} alt='category4' />
                            </div>
                        </div>
                    </div>
                    <div className='category-right'>
                        <img src={cg5} alt='category5'/>
                    </div>
                </div>
            </div>
            <div className='products'>
                <div className='products-top'>
                    <h1>Latest Products</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et
                    </p>
                </div>
                <div className='products-bottom'>
                    <div className='product'>
                        <img src={p1} alt="shoe" />
                        <h4>Addidas New Hammer Sole</h4>
                        <p>150.00</p>
                        <div className='product-actions'>
                            <FontAwesomeIcon icon={faShoppingBag} />
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faInfoCircle}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;