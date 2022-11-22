import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {Redirect} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "./ProfileButton.css"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    setShowMenu(true);
    if (showMenu) return;
  };
  
  useEffect(() => {
    // if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', closeMenu);
      // return () => document.removeEventListener("click", closeMenu);
    }, 0);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", closeMenu);
    };
  }, [showMenu]);
  
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    return(<Redirect to='/'/>)
  };

  return (
    <>
      <button className="profile-button" onClick={openMenu}>
        <AccountCircleIcon style={{ fontSize: 30 }} />
      </button>
      <div className="dropdown-wrap">
        {showMenu && (
          <ul className="profile-dropdown">
            <li id="profile-username">
              <AccountCircleIcon style={{ fontSize: 30 }} />
              {user.username}
            </li>
            <li id="profile-signout" onClick={logout}>
              <ExitToAppIcon style={{ fontSize: 30 }}/>
              <button onClick={logout}>Sign out</button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
