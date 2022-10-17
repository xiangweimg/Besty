import csrfFetch from "./csrf";


const FIND_SHOP = "shop/FIND_SHOP";

const findShop = (shop) => { // an action creator
  return {
    type: FIND_SHOP,
    shop
  }
}


export const fetchShop = (shopId) => async dispatch => { 
    const res = await csrfFetch(`/api/stores/${shopId}`, { 
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(findShop(data));
    }
}


export const getShop = (shopId) => ({shop}) => shop ? shop[shopId] : null

  export default function shopReducer (state = {}, action) {
    let newState = {...state}
    switch (action.type) {
      case FIND_SHOP:
        newState[action.shop.id] = action.shop;
        return newState; 
      default:
        return state;
    }
  } 