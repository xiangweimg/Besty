
import csrfFetch from "./csrf";

const ADD_REVIEW ="reviews/ADD_REVIEW"
const FIND_REVIEWS = "reviews/FIND_REVIEWS"
// const REMOVE_CART="cart/REMOVE_CART"

export const addReview = (review) => { //action
    return {
        type: ADD_REVIEW,
        payload:review
    };
};
export const findReviews = (reviews) => { //action
    return {
        type: FIND_REVIEWS,
        payload:reviews
    };
};

// export const deleteCart = (cartId) => { //action
//     return {
//         type: REMOVE_CART,
//         cartId
//     };
// };

export const createReview = (content, rating, productId, reviewerId) => async dispatch => { 
    const res = await csrfFetch('/api/reviews', {
        method: "POST",
        body: JSON.stringify({
            content, 
            rating, 
            productId, 
            reviewerId})
  })
  if (res.ok) {
      const data = await res.json();
      dispatch(addReview(data));
  }
}

export const fetchReviews = () => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(findReviews(data));
    }
}
// export const updateCart = (cart_id, product_id, quantity, buyer_id) => async dispatch => { 
//     const add_product = {product_id, quantity, buyer_id}
//     const res = await csrfFetch(`/api/cart_items/${cart_id}`, {
//         method: "PATCH",
//         body: JSON.stringify(add_product)
//   })
//   if (res.ok) {
//       const data = await res.json();
//       dispatch(populateCart(data));
//   }
// }
// export const removeCart = (cartId) => async dispatch => { 
//     const res = await csrfFetch(`/api/cart_items/${cartId}`, {
//         method: "DELETE",
//   })
//   if (res.ok) {
//       dispatch(deleteCart(cartId));
//   }
// }

export default function reviewReducer(state = {}, action) {
    Object.freeze(state)
    let newState= {...state}
    switch (action.type) {
        case ADD_REVIEW:
            return { ...newState, ...action.payload.review }
        case FIND_REVIEWS:
            newState = action.payload;
            return newState;
        default:
        return state;
    }};

