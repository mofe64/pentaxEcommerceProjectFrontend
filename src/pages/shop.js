import '../css/shop.css';
import ProductCard from '../components/productCard';
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import Footer from '../components/footer';

import Header from '../components/header';
const Shop = function () {
    return (
        <>
            <Header />
            <div className='shop-head'>
                <div className='shop-head-content'>
                    <h1>Shop till you drop</h1>
                </div>
            </div>
            <div className='shop-main'>
                <div className='main-left'>
                    <div className='category-header'>
                        <h4>Browse Catgories</h4>
                    </div>
                    <div className='category'>
                        <h4>Category 1</h4>
                    </div>
                     <div className='category'>
                        <h4>Category 2</h4>
                    </div>
                     <div className='category'>
                        <h4>Category 3</h4>
                    </div>
                     <div className='category'>
                        <h4>Category 4</h4>
                    </div>
                </div>
                <div className='main-right'>
                    <div className='product-container'>
                        <div className='container-header'>
                            <div className='header-left'>
                                <div className='filter'>
                                    <label for='filter'></label>
                                    <select name='filter'>
                                        <option value="" selected disabled hidden>Default</option>
                                        <option value='price'>Price</option>
                                        <option value="default">Default</option>
                                    </select>
                                </div>
                                <div className='filter'>
                                    <label for='filter'></label>
                                    <select name='filter'>
                                        <option value="" selected disabled hidden>Show 12</option>
                                        <option value='Show 20'>Show 20</option>
                                        <option value="Show 10">Default</option>
                                    </select>
                                </div>
                                
                            </div>
                            <div className='header-right'>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                </ul>
                            </div>
                        </div>
                        <div className='products-shop'>
                            <ProductCard productImage={p1} />
                            <ProductCard productImage={p2} />
                            <ProductCard productImage={p1} />
                            <ProductCard productImage={p2} />
                            <ProductCard productImage={p2} />
                            <ProductCard productImage={p1} />
                            <ProductCard productImage={p2} />
                            <ProductCard productImage={p1} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Shop