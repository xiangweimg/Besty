import csrfFetch from "./csrf";


const FIND_PRODUCT = "product/FIND_PRODUCT";
const FIND_PRODUCTS = "product/FIND_PRODUCTS";

const findProduct = (product) => { // an action creator
  return {
    type: FIND_PRODUCT,
    payload: product
  }
}
const findProducts = (products) => { // an action creator
    return {
      type: FIND_PRODUCTS,
      payload: products
    }
  }
  export const fetchProducts = () => async dispatch => { 
      const res = await csrfFetch('/api/products', {
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(findProducts(data));
    }
}

export const fetchProduct = (productId) => async dispatch => { 
    const res = await csrfFetch(`/api/products/${productId}`, { 
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(findProduct(data));
    }
}

export const getProducts = ({ product }) => product? Object.values(product) : []

export const getProduct = (productId) => ({product}) => product ? product[productId] : null

  export default function productReducer (state = {}, action) {
    let newState = {...state}
    switch (action.type) {
      case FIND_PRODUCT:
        newState[action.payload.id] = action.payload;
        return newState; 
      case FIND_PRODUCTS:
        newState = action.payload;
        return newState;
      default:
        return state;
    }
  } 