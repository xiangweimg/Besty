import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/Modal';
import './index.css';
import App from './App';
import configureStore from './store';
import * as sessionActions from './store/session';
import csrfFetch from './store/csrf';

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
}



function Root() {
  return (
    <div className='all-website'>
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ModalProvider>
    </div>
  );
}

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null 
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}

// if (sessionStorage.getItem("X-CSRF-Token") === null) {
//   console.log('before')
//   restoreCSRF().then(renderApplication);
// } else {
//   console.log('after')
//   renderApplication();
// }