import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css"

function Home() {

    return(
    <div>
        <div className="home-navbar">
                <div className="home-navbar-row">
                    <ul className="catergory-bar">
                    {/* <li onClick={handleClick}><a className="category" href="#">Halloween Hub</a></li>  */}
                    <li> <Link className="category" to={'/categories/2'}>Pets & Pet Supplies</Link> 
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
                    <li><Link className="category" to={'/categories/1'}>Pokemon & Pokemon Cards</Link> </li>
                    <li><Link className="category" to={'/categories/3'}>Toys & Entertainment</Link></li>
                    <li><Link className="category" to={'/categories/5'}>Art & Collectibles</Link></li>
                    <li><Link className="category" to={'/categories/6'}>Clothing & Shoes</Link></li>
                    <li><Link className="category" to={'/categories/4'}>Home & Living</Link></li>
                    {/* <li><Link className="category" to={'/categories/Gifts & Gift Cards'}>Gifts & Gift Cards</Link></li> */}
                    </ul>
                </div>
        </div>
    </div>
    )
}

export default Home