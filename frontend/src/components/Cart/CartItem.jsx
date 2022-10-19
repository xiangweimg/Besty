import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {createCart, removeCart} from '../../store/cart'
import StorefrontIcon from '@mui/icons-material/Storefront';
import './CartItem.css'


function CartItem({item}) {
  //buyer_id:, product_id, quantity
  const dispatch = useDispatch() 
  const [count, setCount] = useState(item.quantity);
  const sessionUser = useSelector(state => state.session.user);
  const product = useSelector(({product}) => product[item.productId]);

  const handleClick = e =>{
    dispatch(removeCart(item.id));
  }
  const clickButton= e =>{
    setCount(count + 1)
    dispatch(createCart(item.id, count, sessionUser.id))
  }
  if (!product) return null;
  return (
    <li key={item.id} className="cart-item">
      <div className='each-item'>
        <div className="cart-item-storename">
            <StorefrontIcon fontSize="large" />
            <Link id='cart-storename' to={`/shops/${product.storeId}`}>{product.storeName}</Link>
        </div>
        <div className="cart-item-main">
            <div className="cart-item-img">
              <img src={product.img} alt="" />
            </div>
            <div className='cart-item-name'>
              <div>
                {product.productName}
              </div>
              <div className="cart-remove-button">
                <button onClick={handleClick}>
                  Remove
                </button>
              </div>
            </div>
            <div className='cart-amount'>
              <input
                id='enter-box'
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <button
                className="cart-additem-button"
                onClick={clickButton}>
                +
              </button>
            </div>
            <div className='cart-prices'>
              ${product.price}
            </div>
        </div>
        <div className='oder-options'>
            <form>
            <input type="checkbox" value="hi" />
              This order is a gift
            </form>
            <div className='cart-note'>
              <textarea name='message to seller'
              placeholder={`Add a note to ${product.storeName}(optional)`} >
              </textarea>
            </div>

        </div>
      </div>
    </li>
  );
}

export default CartItem;