import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './HomeBar.css'

export default function HomeBar() {
    const sessionUser = useSelector(state => state.session.user) //currentuser
    let message = "Fresh finds fit for you"
    if(sessionUser){
        message= `Welcome back, ${sessionUser.username}!`
    }
  return (
    <div className="home-header">
            <br />
            <h1>{message}</h1>
        <ul>
            <li><Link className='category-circle' to={'/categories/2'}>
                <span></span>
                <p>Pets & Pet Supplies</p>
            </Link></li>
            <li><Link className='category-circle' to={'/categories/1'}>
                <span></span>
                <p>Pokemon & Pokemon Cards</p> 
            </Link></li>
            <li><Link className='category-circle' to={'/categories/3'}>
                <span></span>
                <p>Toys & Entertainmen</p>
            </Link></li>
            <li><Link className='category-circle' to={'/categories/5'}>
                <span></span>
                <p>Art & Collectibles</p>
            </Link></li>
            <li><Link className='category-circle' to={'/categories/6'}>
                <span></span>
                <p>Clothing & Shoes</p>
            </Link></li>
            <li><Link className='category-circle' to={'/categories/4'}>
                <span></span>
                <p>Home & Living</p>
                </Link></li>
        </ul>
    </div>
  )
}
