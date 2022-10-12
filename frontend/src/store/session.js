import csrfFetch from "./csrf";

const LOGIN_USER = "session/LOGIN_USER";
const LOGOUT_USER = "session/LOGOUT_USER";

const loginUser = (user) => { // an action creator
  return {
    type: LOGIN_USER,
    payload: user
  }
}

const logoutUser = () => { // an action creator
  return {
    type: LOGOUT_USER
  }
}

export const login = ({credential,password}) => async dispatch => { 
  const res = await csrfFetch('/api/session', { 
    method: 'POST', //create a new session/login
    body: JSON.stringify({credential, password})
  })
  if (res.ok) {
    const data = await res.json();
    console.log(data)
    sessionStorage.setItem("currentUser", JSON.stringify(data.user))
    dispatch(loginUser(data.user));
  }
}

export const logout = () => async dispatch => {
    console.log("in logout")
  const res = await csrfFetch('/api/session', {
    method: 'DELETE'
  })
  console.log("in logout2")
    storeCurrentUser(null)
    // sessionStorage.removeItem("currentUser")
    dispatch(logoutUser())
}

export const restoreSession = () => async dispatch => {
  const res = await csrfFetch('/api/session') //did what restoreCSRF did, provide Xtoken
  storeCSRFToken(res) // csrfFetch会拿到一个Xtoken，然后storeCSRFToken会把这个存入sessionStorage
  const data = await res.json() //from a promise to json
  storeCurrentUser(data.user)
  dispatch(loginUser(JSON.stringify(data.user)));
}

const storeCurrentUser = (user) => {
  sessionStorage.setItem("currentUser", JSON.stringify(user))
}

export function storeCSRFToken(responseObj) { //send Xtoken to session storage
  const csrfToken = responseObj.headers.get('X-CSRF-Token');
  if (csrfToken) sessionStorage.setItem('X-CSRF-Token', csrfToken);
}

export const signup = (user) => async dispatch => {
  const { username, email, password} = user
  const res = await csrfFetch(`/api/users`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password
    })
  });
  const data = await res.json();
  storeCurrentUser(data.user)
  dispatch(loginUser(data.user))
  return res
}


export default function sessionReducer (state = {'user': JSON.parse(sessionStorage.getItem("currentUser"))}, action) {
  const newState = {...state}
  switch (action.type) {
    case LOGIN_USER:
      newState['user'] = action.payload;
      return newState; //让state上显示出current user
    case LOGOUT_USER:
      console.log('logging out')
      newState['user'] = null;
      return newState;
    default:
      return state;
  }
} 