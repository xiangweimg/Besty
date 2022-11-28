import { Link } from 'react-router-dom';
import React from 'react'
import './SearchItems.css'

export default function SearchItems({product}) {
  return (
    <div>
        <li>
            <Link className='search-product-img' to={`/products/${product.item.id}`}>
                <img src={product.item.img} alt="" />
                <span className='search-product-name'>{product.item.productName}</span>
                <span className='search-product-price'>${product.item.price}</span>
            </Link>
        </li>
    </div>
  )
}
