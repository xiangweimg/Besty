import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({product: {id, productName, img}}) => {

    return(
        <li className='home-product'>
            <Link to={`/products/${id}`}>{productName}<img src={img} alt="" />
            </Link>
        </li>
    )
}

export default ProductIndexItem