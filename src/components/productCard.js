import '../css/productCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingBag, faHeart, faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ productImage }) => {
    return (
        <div className='product'>
            <img src={productImage} alt="shoe" />
            <div className='product-details'>
                <h4>Addidas New Hammer Sole</h4>
                <p>150.00</p>
                <div className='product-actions'>
                    <div className='product-action-link'>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </div>
                    <div className='product-action-link'>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className='product-action-link'>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductCard;