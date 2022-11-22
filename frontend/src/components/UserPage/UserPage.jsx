import React from 'react';
import {  useSelector } from 'react-redux';

function UserPage() {
    const sessionUser = useSelector(state => state.session.user);
    // let userId
    // if(sessionUser){
    //     userId = sessionUser.id
    // }

if(sessionUser){
    return ( 
      <div className='header-wrapper'>
          <h1>Hi</h1>
      </div>
      );
      }
}

export default UserPage;
