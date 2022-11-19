import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryItemList.css'


const CategoryItemList = ({product}) => {

    return(
        <li className='category-product'>
            <Link className='category-product-img' to={`/products/${product.id}`}>
                <img src={product.img} alt="" />
                <span className='category-product-name'>{product.productName}</span>
                <div  className='category-product-price'>${product.price}</div>
            </Link>
        </li>
    )
}

export default CategoryItemList