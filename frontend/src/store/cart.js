
import csrfFetch from "./csrf";

const ADD ="cart/ADD"

export const getCarts = ({ cart }) => cart? Object.values(cart) : []

export const createCart = (product) => async dispatch => { 
    const res = await csrfFetch('/api/carts', {
        method: "POST",
        body: JSON.stringify(product)
  })
  if (res.ok) {
      const data = await res.json();
      dispatch(populateCart(data));
  }
}

export default function cartReducer(state = {}, action) { //oldstate, action
    switch (action.type) {
        case ADD:
            let newState = {...state};
            if(newState[action.payload.id]){
                newState[action.payload.id].count++

            }else{
                newState[action.payload.id] = action.payload
                newState[action.payload.id].count = 1
            }
            return newState;
      default:
        return state;
    }};

export const populateCart = (product) => { //action
    return {
        type: ADD,
        payload:product
    };
};
