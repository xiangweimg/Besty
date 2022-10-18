import React from "react";
import CartItem from './CartItem';
import { getCarts } from "../../store/cart";
import { useSelector } from "react-redux";
import CartNotice from "./CartNotice";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import './Cart.css';

function Cart() {
  //buyer_id:, product_id, quantity
  const stateSession = useSelector(state => state.session)
  let currentUser
  if (stateSession) currentUser = stateSession.user
  const cartItems =  currentUser.carts.map(item => <CartItem item={item}></CartItem>)

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
      `${cartItems.map(item => `${item.count} of ${item.productName}`).join('\n')}`
    );
  }

  return (
    <div className="cart">
      <h1>{cartItems.length.length} items in your cart</h1>
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