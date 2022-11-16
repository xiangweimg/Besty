import React from "react";
import "./NavBar.css"
import { Link } from 'react-router-dom';
import Category from "../Category/Category";
function Home() {

    // const dispatch = useDispatch()
    // useEffect(() =>{
    //     dispatch(fetchProducts())
    // },[])
    const handleClick = e =>{
        e.preventDefault()

    }
    return(
    <div className="home-navbar">
            <div className="home-navbar-row">
                <ul className="catergory-bar">
                <li><a className="category" href="#">Halloween Hub</a></li> 
                <li> <Link className="category" to={'/category/Pet'}>Pet</Link> 
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
                <li><Link className="category" to={'/category/Pokemon'}>Pokemon</Link> </li>
                <li><Link className="category" to={'/category/Toys & Entertainment'}>Toys & Entertainment</Link></li>
                <li><Link className="category" to={'/category/Art & Collectibles'}>Art & Collectibles</Link></li>
                <li><Link className="category" to={'/category/Clothing & Shoes'}>Clothing & Shoes</Link></li>
                <li><Link className="category" to={'/category/Home & Living'}>Home & Living</Link></li>
                <li><Link className="category" to={'/category/Gifts & Gift Cards'}>Gifts & Gift Cards</Link></li>
                </ul>
            </div>
            {/* <hr className="nav-divider"/> */}
    </div>
    )
}

export default Home