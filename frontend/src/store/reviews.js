
import csrfFetch from "./csrf";

const FIND_REVIEWS = 'reviews/FIND_REVIEWS'
const ADD_REVIEW ="reviews/ADD_REVIEW"
const REMOVE_REVIEW="reviews/REMOVE_REVIEW"

export const findReviews = (reviews) => { //action
    return {
        type: FIND_REVIEWS,
        reviews
    };
};
export const addReview = (review) => { //action
    return {
        type: ADD_REVIEW,
        payload: review
    };
};

export const deleteReview = (reivewId) => { //action
    return {
        type: REMOVE_REVIEW,
        reivewId
    };
};

export const createReview = (review) => async dispatch => { 
    const res = await csrfFetch('/api/reviews', {
        method: "POST",
        body: JSON.stringify({review})
  })
  if (res.ok) {
      const data = await res.json();
      dispatch(addReview(data));
  }
}

// export const fetchReviews = () => async dispatch => {
//     const res = await csrfFetch('/api/reviews', {
//     })
//     if (res.ok) {
//         const data = await res.json();
//         dispatch(findReviews(data));
//     }
// }
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
export const removeReview = (reivewId) => async dispatch => { 
    const res = await csrfFetch(`/api/reviews/${reivewId}`, {
        method: "DELETE",
  })
  if (res.ok) {
      dispatch(deleteReview(reivewId));
  }
}

export default function reviewReducer(state = {}, action) {
    Object.freeze(state)
    let newState= {...state}
    switch (action.type) {
        case FIND_REVIEWS:
            newState = action.reviews;
            return newState;
        case ADD_REVIEW:
            // return { ...newState, ...action.payload }
            newState[action.payload.id] = action.payload;
            return newState
        case REMOVE_REVIEW:
            delete newState[action.reivewId]
            return newState;
        default:
        return state;
    }};

