import csrfFetch from "./csrf";

export const LOGIN_USER = "session/LOGIN_USER";
export const LOGOUT_USER = "session/LOGOUT_USER";

const loginUser = (payload) => { // an action creator
  // if(payload.user !==null){
    console.log(payload);
    return {
      type: LOGIN_USER,
      payload
    }
  // }
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
    sessionStorage.setItem("currentUser", JSON.stringify(data))
    dispatch(loginUser(data));
  }
}

export const logout = () => async dispatch => {
  const res = await csrfFetch('/api/session', {
    method: 'DELETE'
  })
    storeCurrentUser(null)
    // sessionStorage.removeItem("currentUser")
    dispatch(logoutUser())
    return res
}

export const restoreSession = () => async dispatch => {
  const res = await csrfFetch('/api/session') //did what restoreCSRF did, provide Xtoken
  storeCSRFToken(res) // csrfFetch会拿到一个Xtoken，然后storeCSRFToken会把这个存入sessionStorage
  const data = await res.json() //from a promise to json
  storeCurrentUser(data)
  if(data.user !== null){
    dispatch(loginUser(data));
  }
}

const storeCurrentUser = (user) => {
  if (user === undefined) {
    sessionStorage.setItem("currentUser", JSON.stringify(user))
  } else {
    sessionStorage.setItem("currentUser", null)
  }

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
  dispatch(loginUser(data))
  return res
}


export default function sessionReducer (state = {user: JSON.parse(sessionStorage.getItem("currentUser"))}, action) {
  Object.freeze(state)
  let newState = {...state}
  switch (action.type) {
    case LOGIN_USER:
      newState = {}
      newState['user'] = action.payload;
      return newState; //让state上显示出current user
    case LOGOUT_USER:
      newState['user'] = null;
      return newState;
    default:
      return state;
  }
} 