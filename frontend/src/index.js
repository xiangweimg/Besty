import React from 'react';
import {createRoot} from 'react-dom/client';
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
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const renderApplication = () => {
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
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

