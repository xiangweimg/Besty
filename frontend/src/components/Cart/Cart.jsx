import React from "react";
import CartItem from './CartItem';
import { getCarts } from "../../store/cart";
import { useSelector } from "react-redux";
import './Cart.css';

function Cart() {

  const carts = useSelector(getCarts);
  // [1:{id: 1,count: 1, product: "xxx"}, 2:];
  const cartItems =  carts.map(item => <CartItem item={item}></CartItem>)

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      Your cart is empty.
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
      <p className="cart-policy">Betsy Purchase Protection: Shop confidently on Betsy knowing if something goes wrong with an order, we've got your back.</p>
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