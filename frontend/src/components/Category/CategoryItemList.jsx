import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryItemList.css'


const CategoryItemList = ({product}) => {

    return(
        <li className='category-product'>
            <Link className='category-product-img' to={`/products/${product.id}`}>
                <img src={product.img} alt="" />
                {/* <div  className='home-product-price'>${product.price}</div> */}
            </Link>
        </li>
    )
}

export default CategoryItemList