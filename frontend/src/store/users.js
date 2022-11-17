import csrfFetch from "./csrf";
import { LOGIN_USER } from "./session";

export const GET_USERS = 'users/getUsers'
export const GET_USER ='users/getUser'

export const setUsers = (users) =>({
    type: GET_USERS,
    payload: users
})
export const setUser = (user) =>({
    type: GET_USER,
    user
})

export const getUsers = (state) =>{
    return Object.values(state.users)
}

export const getUser = (userId) => ({ users }) => users ? users[userId] : null;

export const fetchUsers = () => async(dispatch) => {
    const res = await csrfFetch(`/api/users`);
    if (res.ok) {
        const data = await res.json()
        dispatch(setUsers(data))
    }
}
export const fetchUser = (userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}`);
    if (res.ok) {
        const data = await res.json()
        dispatch(setUser(data))
    }
}

const usersReducer = (state={}, action)=>{
    Object.freeze(state)
    switch(action.type){
        case LOGIN_USER:
            return {...state, ...action.payload.user}
        case GET_USERS:
            return{...state,...action.payload.users}
        case GET_USER:
            return{...state, [action.user.id]: action.user}
        default:
            return state
    }
}

export default usersReducer
