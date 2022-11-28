import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, fetchProduct } from '../../store/product';
import LoginFormModal from '../LoginFormModal/Modal';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Review from './Reviews';
import CartModal from '../CartModal/CartModal';
import './ProductShow.css'

const ProductShow = () => {
    const dispatch = useDispatch();
    const [quantity, setQuantity]= useState(1)
    const {productId} = useParams(); 
    const product = useSelector(getProduct(productId)) //get product from state
    const sessionUser = useSelector(state => state.session.user);

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    },[productId]);//state add product

    let prop
    if(product && sessionUser){
         prop = {
            productId: productId,
            quantity: quantity,
            sessionUserId: sessionUser.id,
            availability: product.availability
        }
    }
    
    // setShowModal(prev => !prev)

    let dynamicAddToCartButton;
    if (sessionUser) {
        dynamicAddToCartButton = (
            // <input onClick={add_to_cart} className='add-to-cart' type="button" value="Add to cart"/>
            <CartModal prop={prop}/>
            )
    } else {
        let message = {
            text: 'Add to cart',
            type: 'add-to-cart-button'
        }
        dynamicAddToCartButton = (
            <LoginFormModal message={message}/>
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
            <div className='product-left'>
                <div className='product-img-reviews'>
                    <img src={product.img} alt="" />
                    <Review/>
                </div>
            </div>
            <div className='product-container'>
                <Link className='store-name' to={`/shops/${product.storeId}`}>{product.storeName}</Link>
                <div className="store-sales">
                    {product.storeSales} Sales
                </div>
                <div className='product-name'>
                    { product.productName }
                </div>
                <p className='product-price'>${ product.price }+</p>
                {/* <p>Pay in 4 installments of ${ (product.price)/4}</p> */}
                <p className='product-quantity-text'>Quantity:</p>
                <div className='product-options'>
                    <label className='product-option-title'>
                    <div className='product-option-button' onClick={decrement}>
                        <button> <RemoveCircleOutlineIcon sx={{ fontSize: 40 }}/> </button>
                    </div>
                    <input type="text" 
                        value={quantity}
                        onChange={(e)=> setQuantity(parseInt(e.target.value))}/>
                    <div className='product-option-button' onClick={increment}>
                        <button> <AddCircleOutlineIcon sx={{ fontSize: 40 }}/> </button>
                    </div>
                    </label>
                </div>
                <div id='product-stock'>Stock: { product.availability }</div>
                {dynamicAddToCartButton}
                <div className='product-description'>
                    <p>Description:</p>
                    <span>{ product.description }</span>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default ProductShow