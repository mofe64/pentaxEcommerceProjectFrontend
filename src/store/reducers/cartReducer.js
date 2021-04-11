import * as logger from '../../util/logger';
import Item from '../../util/item';
import { ADD_TO_CART} from '../actions/cartActions';

const initialState = {
    cart: {
        items: {},
        totalAmount: 0,
    },
    userCart: {
        items: {},
        totalAmount: 0,
    }
}
const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productToAdd = action.product
            let cartItem;
            let itemTotal;
            logger.logInfo("cart debug")
            logger.logInfo(state.cart);
            if (state.cart.items[productToAdd.id]) {
                const existingItemQuantity = state.cart.items[productToAdd.id].quantity;
                const newQuantity = existingItemQuantity + action.quantity;
                itemTotal = newQuantity * parseFloat(productToAdd.price)
                cartItem = new Item(productToAdd, newQuantity, itemTotal.toFixed(2))
            } else {
                itemTotal = action.quantity * parseFloat(productToAdd.price)
                cartItem = new Item(productToAdd, action.quantity, itemTotal.toFixed(2))
            }
            return {
                ...state,
                cart: {
                    items: {
                        ...state.cart.items,
                        [productToAdd.id]: cartItem,
                    },
                    totalAmount: state.cart.totalAmount + itemTotal
                }
            }
        default:
            return state
    }
}

export default cartReducer;

