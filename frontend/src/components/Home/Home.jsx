import React from "react";
import "./Home.css"
function Home() {
    return(
    <div className="home">
        <div className="home-container">
            <div className="home-row">
            <ul>
            <li><a className="category" href="#">Halloween Hub</a></li> 
            <li><a className="category" href="#">Pets</a></li>
            <li><a className="category" href="#">Pokemon</a></li>
            <li><a className="category" href="#">Toys & Entertainment</a></li>
            <li><a className="category" href="#">Art & Collectibles</a></li>
            <li><a className="category" href="#">Clothing & Shoes</a></li>
            <li><a className="category" href="#">Home & Living</a></li>
            </ul>
            </div>
            <hr />
        </div>
    </div>
    )
}

export default Home