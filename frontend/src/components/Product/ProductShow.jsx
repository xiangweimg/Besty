import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, fetchProduct } from '../../store/product';
import { populateCart, createCart } from '../../store/cart';
import './ProductShow.css'

const ProductShow = () => {
    const dispatch = useDispatch();
    const [quantity, setQuantity]= useState(0)
    const {productId} = useParams(); 
    const product = useSelector(getProduct(productId))
    const stateSession = useSelector(state => state.session)
    let currentUser
    if (stateSession) currentUser = stateSession.user

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    },[productId]);
    const increment = (e) =>{
        e.preventDefault()
        dispatch(createCart(product, quantity, currentUser.id))
    };
    const add = e =>{
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
            <div className='product'>
            <div className='product-container'>
                <Link className='store-name' to={`/shops/${product.storeId}`}>{product.storeName}</Link>
                <div className='product-name'>
                    { product.productName }
                </div>
                <p className='product-price'>${ product.price }+</p>
                {/* <p>Pay in 4 installments of ${ (product.price)/4}</p> */}
                <div className='product-options'>
                <label className='product-option-title'>Quantity:
                <button onClick={decrement}> - </button>
                <input type="text" 
                value={quantity}
                onChange={(e)=> setQuantity(parseInt(e.target.value))}/>
                <button onClick={add}> + </button>
                </label>
                </div>
                <div>Stock: { product.availability }</div>
                <input onClick={increment} className='add-to-cart' type="submit" value="Add to cart" />
                <div className='product-description'>
                <p>Description:</p>
                <span>{ product.description }</span>
                </div>
            </div>
            <div className='product-img'>
            <img src={product.img} alt="" />
            </div>
            </div>
        )
    }
}

export default ProductShow