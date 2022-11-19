import React from "react";
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch, useSelector } from "react-redux";
import visaicon from "../../img/visaicon.png"
import { removeCart } from "../../store/cart";
import { Link } from "react-router-dom";


import './Checkout.css';

function Checkout() {
    const dispatch = useDispatch()
    const carts = useSelector(state => Object.values(state.carts))
    let total = 0
    carts.forEach(element => total += element.quantity * element.price) 
    let total_items = 0
    carts.forEach(element => total_items += element.quantity) 
    let discount = 0;
    
    const onSubmit = (e) => {
        e.preventDefault();
        carts.forEach(cart => dispatch(removeCart(cart.id)))
    }

  return (
    <div className="checkout">
        <div className="secure-payment-header">
            <LockIcon/>
            <p> Secure options in checkout</p>
        </div>
        <div id="visa-icon">
            <img src={visaicon} alt="" />
        </div>
        <div className="items-total">
            <span>Item(s) total</span>
            <p>${total.toFixed(2)}</p>
        </div>
        <hr />
        <div className="items-total-sub">
            <p>Subtotal</p>
            <p>${(total + discount).toFixed(2)}</p>
        </div>
        <div className="items-total-sub">
            <p>Shipping</p>
            <p>Free</p>
        </div>
        <hr />
        <div className="items-total">
            <span>Total({total_items} items)</span>
            <span>${(total + discount).toFixed(2)}</span>
        </div>
        <form className="checkout-button" onClick={onSubmit}>
            <Link to='/checkout' className="checkout-link">Proceed to checkout</Link>
        </form>
    </div>
  )
}

export default Checkout;