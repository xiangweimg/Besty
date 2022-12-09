import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal/Modal';
import logo from "../../img/logo.png"
import { fetchCart } from "../../store/cart";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NavBar from '../NavBar/NavBar'
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const carts = useSelector(state => Object.values(state.carts))
  const [content, setContent] = useState("")
  const dispatch = useDispatch()
  const search_icon = document.getElementById('searchIcon');

  let total = 0
  carts.forEach(element => total += element.quantity)
  
  useEffect(()=>{
    if(sessionUser){
      dispatch(fetchCart(sessionUser.id))
    }},[sessionUser])
    
    useEffect(()=>{
      total = 0
    }, [sessionUser])

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    let message = {
      text: 'Sign in',
      type: 'sign-in-button'
  }
    sessionLinks = (
      <>
        <LoginFormModal message={message}/>
      </>
    );
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      search_icon.click()
    }
  }
  return (
    
<div className='header-wrapper'>
    <div className='header-main'>
      <div className='header'>
        <Link to= "/">
          <img className='logo' src={logo} alt="logo" /> 
        </Link>
  
        <div className='header_search'>
          <input className='header_searchInput' type="text" 
          placeholder='Search for anything'
          value={content}
          onChange={e=> setContent(e.target.value)}
          onKeyPress={handleKeyPress}/>
          <Link to={{ pathname:'/search',
           state:{content: content} }} className='searchIcon' id='searchIcon'>
            <SearchIcon sx={{ fontSize: 30 }}/>
          </Link>
        </div>
        <div className='header_option'>
           {sessionLinks}
        </div>
        <div className='header_basket'>
          <Link id='cart-icon' to='/cart'>
          <ShoppingCartOutlinedIcon className='shoppingIcon'/>
          </Link>
          <span className='basket_count'>{total}</span>
        </div>
      </div>
      <div className='navbar'>
          <NavBar/>
      </div>
          <hr  className='navbar-divider' />
    </div>
</div>
  );
}

export default Navigation;
