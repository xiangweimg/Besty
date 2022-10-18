import React, { useEffect } from "react";
import "./NavBar.css"
import {useDispatch} from 'react-redux'
import { fetchProducts } from "../../store/product";
function Home() {

    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchProducts())
    },[])
    return(
    <div className="home-navbar">
        <div className="home-navbar-container">
            <div className="home-navbar-row">
            <ul className="catergory-bar">
            <li><a className="category" href="#">Halloween Hub</a></li> 
            <li><a className="category" href="#">Pets</a>
                {/* <div className="dropdown-menu">
                    <ul>
                        <li><a href="#">All Pets</a></li>
                        <li><a href="#"></a>Accessories</li>
                        <li><a href="#"></a>Pet Foods</li>
                        <li><a href="#"></a>Dogs</li>
                        <li><a href="#"></a>Cats</li>
                    </ul>
                </div> */}
            </li>
            <li><a className="category" href="#">Pokemon</a></li>
            <li><a className="category" href="#">Toys & Entertainment</a></li>
            <li><a className="category" href="#">Art & Collectibles</a></li>
            <li><a className="category" href="#">Clothing & Shoes</a></li>
            <li><a className="category" href="#">Home & Living</a></li>
            <li><a className="category" href="#">Gifts & Gift Cards</a></li>
            </ul>
            </div>
            <hr className="nav-divider"/>
        </div>
    </div>
    )
}

export default Home