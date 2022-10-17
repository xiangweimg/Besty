import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {removeCart, deleteCart, getCarts} from '../../store/cart'


function CartItem({item}) {
  //buyer_id:, product_id, quantity
  const dispatch = useDispatch() 
  const [count, setCount] = useState(item.count);
  const handleClick = e =>{
    dispatch(deleteCart(item.id))
  }
  return (
    <li key={item.id} className="cart-item">
      <img src={item.img} alt="" />
      <div className="cart-item-header">
          <Link to={`/shops/${item.storeId}`}>{item.storeName}</Link>
      </div>
      <div className="cart-item-main">
        <div>
          {item.productName}
        </div>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          className="cart-item-button">
          +
        </button>
      </div>
        <button className="cart-remove-button" onClick={handleClick}>
          Remove
        </button>
    </li>
  );
}

export default CartItem;