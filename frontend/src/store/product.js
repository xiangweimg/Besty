import csrfFetch from "./csrf";


const FIND_PRODUCT = "product/FIND_PRODUCT";
const FIND_PRODUCTS = "product/FIND_PRODUCTS";

const findProduct = (product) => { // an action creator
  return {
    type: FIND_PRODUCT,
    product
  }
}
const findProducts = (products) => { // an action creator
    return {
      type: FIND_PRODUCTS,
      products
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
    Object.freeze(state)
    let newState = {...state}
    switch (action.type) {
      case FIND_PRODUCT:
        newState = {}
        newState[action.product.id] = action.product;
        return newState; 
      case FIND_PRODUCTS:
        newState = action.products;
        return newState;
      default:
        return state;
    }
  } 