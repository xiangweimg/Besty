import React, { useEffect } from "react";
import CartItem from './CartItem';
import Checkout from "./Checkout";
import CartNotice from "./CartNotice";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../store/cart";
import './Cart.css';

function Cart() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user) //currentuser
  // const [shopperId, setShopperId] = useState("");

  // useEffect(() => {
  //   if (sessionUser) setShopperId(sessionUser.id);
  // }, [sessionUser])

  useEffect(()=>{
    if(sessionUser){
      dispatch(fetchCart(sessionUser.id))
    }
}, [dispatch, sessionUser])

  const carts = useSelector(state => Object.values(state.carts))

  let total = 0;
  carts.forEach(element => total+= element.quantity)

  if (!carts.length) return (
    <div>
      <CartNotice/>
      <EmptyCart message="empty"/>
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