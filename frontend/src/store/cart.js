
import csrfFetch from "./csrf";
import { GET_USERS } from './users';
import { LOGIN_USER, LOGOUT_USER } from './session';

const ADD_CART ="cart/ADD_CART"
const ADD_IN_CART = 'cart/ADD_IN_CART'
const REMOVE_CART="cart/REMOVE_CART"

export const populateCart = (cart) => { //action
    return {
        type: ADD_CART,
        payload:cart
    };
};
// export const addInCart = (product) => { //action
//     return {
//         type: ADD_IN_CART,
//         payload:product
//     };
// };
export const deleteCart = (cartId) => { //action
    return {
        type: REMOVE_CART,
        cartId
    };
};

// export const getCarts = ({ cart }) => cart? Object.values(cart) : []

export const createCart = (product_id, quantity, buyer_id) => async dispatch => { 

    const add_product = {product_id, quantity, buyer_id}
    const res = await csrfFetch('/api/cart_items', {
        method: "POST",
        body: JSON.stringify(add_product)
  })
  if (res.ok) {
      const data = await res.json();
      dispatch(populateCart(data));
  }
}
export const removeCart = (cartId) => async dispatch => { 
    const res = await csrfFetch(`/api/cart_items/${cartId}`, {
        method: "DELETE",
  })
  if (res.ok) {
    //   const data = await res.json();
      dispatch(deleteCart(cartId));
  }
}

export default function cartReducer(state = {}, action) {
    Object.freeze(state)
    const newState= {...state}
    switch (action.type) {
        case LOGIN_USER:
        case GET_USERS:
            return { ...newState, ...action.payload.carts };
        case ADD_CART:
            // newState[action.payload.carts.] = action.payload
            // newState[action.payload.productId].count = action.payload.quantity
            return { ...newState, ...action.payload.carts }
        case REMOVE_CART:
            delete newState[action.cartId]
            return newState;
        case LOGOUT_USER:
            return {};
        default:
        return state;
    }};

