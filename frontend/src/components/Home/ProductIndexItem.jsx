import React from 'react';
import { Link } from 'react-router-dom';
import './ProductIndexItem.css'


const ProductIndexItem = ({product}) => {

    return(
        <li key={product.id} className='home-product'>
            <Link className='home-product-img' to={`/products/${product.id}`}>
                <img src={product.img} alt="" />
            </Link>
        </li>
    )
}

export default ProductIndexItem