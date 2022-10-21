import React from "react";
import LockIcon from '@mui/icons-material/Lock';
import { useSelector } from "react-redux";
import visaicon from "../../img/visaicon.png"
import './Checkout.css';

function Checkout() {
    // const carts = useSelector({carts})
    const onSubmit = (e) => {
        e.preventDefault();
        window.alert(
        "Purchased the following:\n" 
        // `${carts.map(item => `${item.quantity} of ${product.productName}`).join('\n')}`
        );
    }
    const carts = useSelector(state => Object.values(state.carts))
    let total = 0
    carts.forEach(element => total += element.quantity * element.price) 
    let total_items = 0
    carts.forEach(element => total_items += element.quantity) 
    let discount = 0;
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
        <div className="items-total">
            <span>Shospan discont</span>
            <p>-${discount}</p>
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
        <form className="checkout-button" onSubmit={onSubmit}>
            <button type="submit">Proceed to checkout</button>
        </form>
    </div>
  )
}

export default Checkout;