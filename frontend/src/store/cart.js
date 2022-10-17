
import csrfFetch from "./csrf";

const ADD_CART ="cart/ADD_CART"
const ADD_IN_CART = 'cart/ADD_IN_CART'
const REMOVE_CART="cart/REMOVE_CART"

export const populateCart = (product) => { //action
    return {
        type: ADD_CART,
        payload:product
    };
};
export const addInCart = (product) => { //action
    return {
        type: ADD_IN_CART,
        payload:product
    };
};
export const deleteCart = (productId) => { //action
    return {
        type: REMOVE_CART,
        payload:productId
    };
};

export const getCarts = ({ cart }) => cart? Object.values(cart) : []

export const createCart = (add_product) => async dispatch => { 
    const res = await csrfFetch('/api/carts', {
        method: "POST",
        body: JSON.stringify(add_product)
  })
  if (res.ok) {
      const data = await res.json();
      dispatch(populateCart(data));
  }
}
export const removeCart = (productId) => async dispatch => { 
    const res = await csrfFetch(`/api/carts/${productId}`, {
        method: "DELETE",
  })
  if (res.ok) {
      const data = await res.json();
      dispatch(deleteCart(data));
  }
}


export default function cartReducer(state = {}, action) { //oldstate, action
    Object.freeze(state)
    const newState= {...state}
    switch (action.type) {
        case ADD_CART:
            newState[action.payload.id] = action.payload
            newState[action.payload.id].count = action.product.quantity
        case ADD_IN_CART:
            if(newState[action.payload.id]){
                newState[action.payload.id].count++

            }else{
                newState[action.payload.id] = action.payload
                newState[action.payload.id].count = 1
            }
            return newState;
        case REMOVE_CART:
            delete newState[action.payload]
            return newState
        default:
        return state;
    }};

