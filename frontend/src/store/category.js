import csrfFetch from "./csrf";


const FIND_CATEGORY = "category/FIND_CATEGORY";

const findCategory = (category) => { // an action creator
  return {
    type: FIND_CATEGORY,
    category
  }
}

export const fetchCategory = (categoryId) => async dispatch => { 
    const res = await csrfFetch(`/api/categories/${categoryId}`, { 
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(findCategory(data));
    }
}

// export const getCategory = (categoryId) => ({category}) => category ? category[categoryId] : null
export const getCategory = ({ categories }) => categories? categories : []

export default function categoryReducer (state = {}, action) {
    Object.freeze(state)
    let newState = {...state}
    switch (action.type) {
      case FIND_CATEGORY:
        newState = {}
        return {...newState, ...action.category}
      default:
        return state;
    }
  } 