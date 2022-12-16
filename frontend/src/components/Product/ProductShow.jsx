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
 import { fetchCategory, getCategory } from '../../store/category';
 import CategoryItemList from '../Category/CategoryItemList';
 import _ from 'underscore';
 import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import './ProductShow.css'

const ProductShow = () => {
    const dispatch = useDispatch();
    const [quantity, setQuantity]= useState(1)
    const {productId} = useParams(); 
    const product = useSelector(getProduct(productId)) //get product from state
    const sessionUser = useSelector(state => state.session.user);
    const [render, setRender] = useState(false)
    // const [category, seCategory] = useState(useSelector(getCategory))
    const category =  useSelector(getCategory)

    useEffect(()=>{
        dispatch(fetchProduct(productId))
        setRender(true)
    },[productId]);//state add product

    if(product && render){
        setRender(false)
        dispatch(fetchCategory(product.categoryId))
    }

    let products
    let result
    if(category.products){
        result = Object.values(category.products).filter(product => product.id !== parseInt(productId));
        products = _.sample( result, 2);
    }
    let productList
    if(result){
      productList =  products.map(product => <CategoryItemList key={product.id} product={product}></CategoryItemList>)
    }
      
    let prop
    if(product && sessionUser){
         prop = {
            productId: productId,
            quantity: quantity,
            sessionUserId: sessionUser.id,
            availability: product.availability
        }
    }
    
    let dynamicAddToCartButton;
    if (sessionUser) {
        dynamicAddToCartButton = (
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
        if(quantity > 1){
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
                <div id='product-stock'>Purchase limit: { product.availability }</div>
                {dynamicAddToCartButton}
                <div className='shipping'><LocalShippingTwoToneIcon color="primary" sx={{ fontSize: 45 }}/><p>Hooray!</p> This item ships free to the US.</div>
                <p id='product-description-title'>Description:</p>
                <div className='product-description'>
                    <span>{ product.description }</span>
                </div>
                <div className='product-suggest'>
                    <h2>You may also like...</h2>
                    <ul className='product-suggest-product'>{productList}</ul>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default ProductShow