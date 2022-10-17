import React from "react";
import CartItem from './CartItem';
import { getCarts } from "../../store/cart";
import { useSelector } from "react-redux";
import CartNotice from "./CartNotice";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import './Cart.css';

function Cart() {

  const carts = useSelector(getCarts);
  const cartItems =  carts.map(item => <CartItem item={item}></CartItem>)

  if (!cartItems || !cartItems.length) return (
    <div>
      <CartNotice/>
      <EmptyCart/>
      <hr />
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${carts.map(item => `${item.count} of ${item.productName}`).join('\n')}`
    );
  }

  return (
    <div className="cart">
      <h1>{carts.length} items in your cart</h1>
      <CartNotice/>
      <div className="cart-main">
        <ul>
          {cartItems}
        </ul>
        <div className="checkout">
          <form onSubmit={onSubmit}>
            <button className="checkout-button" type="submit">Proceed to checkout</button>
          </form>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Cart;