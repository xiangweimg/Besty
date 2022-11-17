import React, { useEffect, useState } from "react";
import CartItem from './CartItem';
import Checkout from "./Checkout";
import CartNotice from "./CartNotice";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { getUser, fetchUser} from "../../store/users";
import { fetchCart } from "../../store/cart";
import './Cart.css';

function Cart() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user) //currentuser
  const [shopperId, setShopperId] = useState("");

  useEffect(() => {
    if (sessionUser) setShopperId(sessionUser.id);
  }, [sessionUser])

  useEffect(()=>{
    if(sessionUser){
      dispatch(fetchCart(sessionUser.id))
    }
}, [])

  const carts = useSelector(state => Object.values(state.carts))

  // let carts = Object.values(sessionUser.carts)
  let total = 0;
  // let cart_arr = Object.values(carts)
  carts.forEach(element => total+= element.quantity)
  // const shopper = useSelector(getUser(shopperId))

  if (!carts.length) return (
    <div>
      <CartNotice/>
      <EmptyCart/>
      <hr />
    </div>
  );

  let cartItems
  if(sessionUser){
    cartItems = carts.map(item => <CartItem key={item.id} item={item}></CartItem>)
  }

  return (
    <div className="cart-wrapper">
    <div className="cart">
      <h1>{total} item(s) in your cart</h1>
      <CartNotice/>
      <div className="cart-main">
        <ul>
          {cartItems}
        </ul>
        <Checkout/>
      </div>
      <hr />
    </div>
    </div>
  )
}

export default Cart