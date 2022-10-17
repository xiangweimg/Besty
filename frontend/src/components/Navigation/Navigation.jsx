import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal/Modal';
import './Navigation.css';
import logo from "../../img/logo.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NavBar from '../NavBar/NavBar'

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
      </>
    );
  }

  return (
    <div>
      <div className='header'>
        <Link to= "/">
          <img className='logo' src={logo} alt="logo" /> 
        </Link>
  
        <div className='header_search'>
          <input className='header_searchInput' type="text" 
          placeholder='  Search for anything'/>
          <span className='searchIcon'>
            <SearchIcon sx={{ fontSize: 30 }} />
          </span>
        </div>
        <div className='header_option'>
           {sessionLinks}
        </div>
        <div className='header_basket'>
          <Link to='/cart'>
          <ShoppingCartOutlinedIcon className='shoppingIcon'/>
          </Link>
          <span className='basket_count'>0</span>
        </div>
      </div>
        <NavBar/>
    </div>
  );
}

export default Navigation;
