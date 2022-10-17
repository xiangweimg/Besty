import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



  // [1:{id: 1,count: 1, product: "xxx"}, 2:];
function CartItem({item}) {
  // const [count1, setCount] = useState(count);

  // useEffect(() => {
  //   setCount(count);
  // }, [count]);

  return (
    <li className="cart-item">

      <div className="cart-item-header">
          <Link to={`/shops/${item.storeId}`}>{item.storeName}</Link>
      </div>
      <div className="cart-item-main">
        <div>
          {item.productName}
        </div>
        <input
          type="number"
          value={item.count}
        />
        <button
          className="cart-item-button">
          +
        </button>
      </div>
        <button
          className="cart-remove-button">
          Remove
        </button>
    </li>
  );
}

export default CartItem;