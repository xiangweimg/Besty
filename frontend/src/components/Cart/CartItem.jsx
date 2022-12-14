import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {updateCart, removeCart} from '../../store/cart'
import StorefrontIcon from '@mui/icons-material/Storefront';
import './CartItem.css'


function CartItem({item}) {
  const dispatch = useDispatch() 
  const [count, setCount] = useState(item.quantity);
  const sessionUser = useSelector(state => state.session.user);
  const [alert, setAlert] = useState(false)

  const handleClick = e =>{
    e.preventDefault()
    dispatch(removeCart(item.id));
  }
  const clickPlusButton= e =>{
    if(count < item.stock){
      setAlert(false)
      setCount(count + 1)
      dispatch(updateCart(item.id, item.productId, count + 1, sessionUser.id))
    }else{
      setAlert(true)
    }
  }

  const clickMinusButton= e =>{
    if (count > 0){
      setAlert(false)
      setCount(count - 1)
      dispatch(updateCart(item.id, item.productId, count - 1, sessionUser.id))
    }else if(isNaN(e)){
      setCount(0)
    }
  }
 const someFunc = (e) => {
   setCount(parseInt(e.target.value))
    setAlert(false);
}

  if (!item) return null;
  return (
    <li key={item.id} className="cart-item">
      <div className='each-item'>
        <div className="cart-item-storename">
            <StorefrontIcon fontSize="large" />
            <Link className='cart-storename' to={`/shops/${item.storeId}`}>{item.storeName}</Link>
        </div>
        <div className="cart-item-main">
            <div className="cart-item-img">
              <img src={item.img} alt="" />
            </div>
            <div className='cart-item-name'>
                <Link className='cart-item-name-link' to={`/products/${item.productId}`}>
                {item.product}
                </Link>
              <div className="cart-remove-button">
                <button onClick={handleClick}>
                  Remove
                </button>
              </div>
            </div>

            <div className='cart-amount-container'>
              <div className='cart-amount'>
                <button
                    className="cart-additem-button"
                    onClick={clickMinusButton}>
                    -
                  </button>
                  <input
                    id='enter-box'
                    type="text"
                    value={count}
                    required min ="0"
                    disabled
                  />
                  <button
                    className="cart-additem-button"
                    onClick={clickPlusButton}>
                    +
                  </button>
            </div>
              <div id='cart-stock'>
                Purchase limit: {item.stock}
              </div>
              {alert && 
              <div className='cart-alert'>Exceed purchase limit</div>
              }
            </div>

            <div className='cart-prices'>
              ${(item.price * count).toFixed(2)}
            </div>
        </div>
        <div className='order-options'>
            <form>
            <input type="checkbox"  />
              This order is a gift
            </form>
            <div className='cart-note'>
              <textarea name='message to seller'
              placeholder={`Add a note to ${item.storeName}(optional)`} >
              </textarea>
              <div>
                <span id='shipping-info'>Shipping:<p> Free</p></span>
                <Link className='cart-explore' to={`/shops/${item.storeId}`}>Explore more on this store ???</Link>
              </div>
            </div>
        </div>
        <hr />
      </div>
    </li>
  );
}

export default CartItem;