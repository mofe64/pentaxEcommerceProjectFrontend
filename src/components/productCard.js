import '../css/productCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingBag, faHeart, faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, onClick=f=>f }) => {
    return (
        <div className='product' onClick={onClick}>
            <img src={product.image} alt="shoe" />
            <div className='product-details'>
                <h4>{ product.name}</h4>
                <p>N { product.price }</p>
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