import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import pokemon from '../../img/pokemon.png'
import cats from '../../img/cats.png'
import toys from '../../img/toys.jpg'
import arts from '../../img/arts.jpg'
import clothes from '../../img/clothes.jpg'
import beds from '../../img/beds.jpg'
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
                <img src={cats} alt="" />
                <p>Pets & Pet Supplies</p>
            </Link></li>
            <li><Link className='category-circle' to={'/categories/1'}>
                <img src={pokemon} alt="" />
                <p>Pokemon & Pokemon Cards</p> 
            </Link></li>
            <li><Link className='category-circle' to={'/categories/3'}>
                <img src={toys} alt="" />
                <p>Toys & Entertainmen</p>
            </Link></li>
            <li><Link className='category-circle' to={'/categories/5'}>
                <img src={arts} alt="" />
                <p>Art & Collectibles</p>
            </Link></li>
            <li><Link className='category-circle' to={'/categories/6'}>
                <img src={clothes} alt="" />
                <p>Clothing & Shoes</p>
            </Link></li>
            <li><Link className='category-circle' to={'/categories/4'}>
                <img src={beds} alt="" />
                <p>Home & Living</p>
                </Link></li>
        </ul>
    </div>
  )
}
