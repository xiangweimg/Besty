import React, { useEffect, useState } from "react";
import CartItem from './CartItem';
import Checkout from "./Checkout";
import CartNotice from "./CartNotice";
import EmptyCart from "./EmptyCart";
import { useSelector } from "react-redux";
import { getUser} from "../../store/users";
import './Cart.css';

function Cart() {
  const sessionUser = useSelector(state => state.session.user) //currentuser
  const [shopperId, setShopperId] = useState(sessionUser?.id);

  useEffect(() => {
    if (sessionUser) setShopperId(sessionUser.id);
  }, [sessionUser])
  
  const carts = useSelector(({carts}) => {
    // debugger;
    return Object.values(carts).filter(cart => cart.buyerId === sessionUser?.id);
  });
  const shopper = useSelector(getUser(shopperId))
  // debugger;
  if (!carts.length) return (
    <div>
      <CartNotice/>
      <EmptyCart/>
      <hr />
    </div>
  );

  let cartItems
  if(shopper){
    cartItems = carts.map(item => <CartItem key={item.id} item={item}></CartItem>)
  }
  let checkout = carts.map(item => <Checkout key={item.id} item={item}></Checkout>)

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   window.alert(
  //     "Purchased the following:\n" +
  //     `${cartItems.map(item => `${item.count} of ${item.productName}`).join('\n')}`
  //   );
  // }

  return (
    <div className="cart-wrapper">
    <div className="cart">
      <h1>{cartItems.length.length} items in your cart</h1>
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

export default Cart;