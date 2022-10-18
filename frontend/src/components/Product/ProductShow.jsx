import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, fetchProduct } from '../../store/product';
import { populateCart, createCart } from '../../store/cart';
import LoginFormModal from '../LoginFormModal/Modal';
import {Modal} from '../../context/Modal'
import './ProductShow.css'

const ProductShow = () => {
    const dispatch = useDispatch();
    const [quantity, setQuantity]= useState(1)
    const {productId} = useParams(); 
    const product = useSelector(getProduct(productId))
    const sessionUser = useSelector(state => state.session.user);

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    },[productId]);
    
    const add_to_cart = (e) =>{
        e.preventDefault()
        dispatch(createCart(productId, quantity, sessionUser.id))
    };

    let dynamicAddToCartButton;
    if (sessionUser) {
        dynamicAddToCartButton = (
            <input onClick={add_to_cart} className='add-to-cart' type="submit" value="Add to cart" />
        )
    } else {
        dynamicAddToCartButton = (
            <LoginFormModal type={"add-to-cart-button"}/>
        )

    }
    const increment = e =>{
         if(quantity < product.availability){
            setQuantity(quantity + 1)
        }
    }
    const decrement = e =>{
        if(quantity > 0){
            setQuantity(quantity - 1)
        }
    }

    if(product){
        return (
        <div>

        <div className='product'>
            <div className='product-container'>
                <Link className='store-name' to={`/shops/${product.storeId}`}>{product.storeName}</Link>
                <div className='product-name'>
                    { product.productName }
                </div>
                <p className='product-price'>${ product.price }+</p>
                {/* <p>Pay in 4 installments of ${ (product.price)/4}</p> */}
                <p className='product-quantity-text'>Quantity:</p>
                <div className='product-options'>
                    <label className='product-option-title'>
                    <button onClick={decrement}> - </button>
                    <input type="text" 
                        value={quantity}
                        onChange={(e)=> setQuantity(parseInt(e.target.value))}/>
                    <button onClick={increment}> + </button>
                    </label>
                </div>
                <div>Stock: { product.availability }</div>
                {dynamicAddToCartButton}
                <div className='product-description'>
                    <p>Description:</p>
                    <span>{ product.description }</span>
                </div>
            </div>
            <div className='product-img'>
                <img src={product.img} alt="" />
            </div>
        </div>
        </div>

        )
    }
}

export default ProductShow