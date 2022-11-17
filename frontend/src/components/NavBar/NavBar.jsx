import React from "react";
import "./NavBar.css"
import { Link } from 'react-router-dom';
import { fetchProducts} from "../../store/product";
import { useDispatch } from "react-redux";

function Home() {
    const dispatch = useDispatch()
    // useEffect(() =>{
    //     dispatch(fetchProducts())
    // },[])
    const handleClick = e =>{
        e.preventDefault()
        dispatch(fetchProducts())
    }
    return(
    <div className="home-navbar">
            <div className="home-navbar-row">
                <ul className="catergory-bar">
                {/* <li onClick={handleClick}><a className="category" href="#">Halloween Hub</a></li>  */}
                <li onClick={handleClick}> <Link className="category" to={'/category/Pets'}>Pets</Link> 
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
                <li onClick={handleClick}><Link className="category" to={'/category/Pokemon'}>Pokemon</Link> </li>
                <li onClick={handleClick}><Link className="category" to={'/category/Toys & Entertainment'}>Toys & Entertainment</Link></li>
                <li onClick={handleClick}><Link className="category" to={'/category/Art & Collectibles'}>Art & Collectibles</Link></li>
                <li onClick={handleClick}><Link className="category" to={'/category/Clothing & Shoes'}>Clothing & Shoes</Link></li>
                <li onClick={handleClick}><Link className="category" to={'/category/Home & Living'}>Home & Living</Link></li>
                <li onClick={handleClick}><Link className="category" to={'/category/Gifts & Gift Cards'}>Gifts & Gift Cards</Link></li>
                </ul>
            </div>
            {/* <hr className="nav-divider"/> */}
    </div>
    )
}

export default Home