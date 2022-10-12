import React, { useState } from 'react';
import LoginForm from './LoginForm';
import {Modal} from '../../context/Modal'
import SignupForm from '../SignupFormModal/SignupForm'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [signup, setSignup] = useState(false)

  const handleClick = e=>{
    e.preventDefault()
    setSignup(true)
  }
  return (
    <>
      <div className= "login-button-nav"onClick={() => setShowModal(true)}>Sign in</div>
      {showModal && (
        <Modal className = "Modal" onClose={() => {setShowModal(false); setSignup(false)}}>
          { signup && (
            <div>
              <h3>Create your account</h3>
              <p className='registration_is_easy'>Registration is easy.</p>
              <SignupForm className="signupform"/>
            </div>)
          }

          { !signup && (
            <div>
              <div className='header_login_modal'>
              <h2>Sign in</h2>
              <input type="submit" className='register_on_modal' onClick={handleClick} value="Register"/>
              </div>

              <LoginForm />
            </div>)
          }

        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;