
import csrfFetch from "./csrf";
import { GET_USERS } from './users';
import { LOGIN_USER, LOGOUT_USER } from './session';

const ADD_CART ="cart/ADD_CART"
const REMOVE_CART="cart/REMOVE_CART"
const FIND_CART = "cart/FIND_CART"

export const findCart = (cart) => { //action
    return {
        type: FIND_CART,
        cart
    };
};
export const populateCart = (cart) => { //action
    return {
        type: ADD_CART,
        cart
    };
};
export const deleteCart = (cartId) => { //action
    return {
        type: REMOVE_CART,
        cartId
    };
};
export const fetchCart = (userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}`);
    if (res.ok) {
        const data = await res.json()
        dispatch(findCart(data.carts))
    }
}
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
export const updateCart = (cart_id, product_id, quantity, buyer_id) => async dispatch => { 
    const add_product = {product_id, quantity, buyer_id}
    const res = await csrfFetch(`/api/cart_items/${cart_id}`, {
        method: "PATCH",
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
      dispatch(deleteCart(cartId));
  }
}

export default function cartReducer(state = {}, action) {
    Object.freeze(state)
    let newState= {...state}
    switch (action.type) {
        case LOGIN_USER:
            return { ...newState, ...action.payload.carts };
        case GET_USERS:
            return { ...newState, ...action.payload.carts };        
        case LOGOUT_USER:
            return {};
        case ADD_CART:
            return { ...newState, ...action.cart.carts }
        case REMOVE_CART:
            delete newState[action.cartId]
            return newState;
        case FIND_CART:
            return { ...newState, ...action.cart }
        default:
        return state;
    }};

