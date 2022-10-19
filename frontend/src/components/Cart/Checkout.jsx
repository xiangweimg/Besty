import React from "react";
import LockIcon from '@mui/icons-material/Lock';
import './Checkout.css';
import { useSelector } from "react-redux";

function Checkout() {
    // const carts = useSelector({carts})
    const onSubmit = (e) => {
        e.preventDefault();
        window.alert(
        "Purchased the following:\n" 
        // `${carts.map(item => `${item.quantity} of ${product.productName}`).join('\n')}`
        );
    }

  return (
    <div className="checkout">
        <div>
            <LockIcon/>
            <p> Secure options in checkout</p>
        </div>
        <div className="items-total">
            <p>Item(s) total</p>
            <p>$</p>
        </div>
        <div className="items-total">
            <p>Shop discont</p>
            <p>-$0</p>
        </div>
        <hr />
        <div className="items-total">
            <p>Subtotal</p>
            <p>-$0</p>
        </div>
        <div className="items-total">
            <p>Shipping</p>
            <p>Free</p>
        </div>
        <hr />
        <div className="items-total">
            <p>Total</p>
            <p>-$0</p>
        </div>
        <form onSubmit={onSubmit}>
            <button className="checkout-button" type="submit">Proceed to checkout</button>
        </form>
    </div>
  )
}

export default Checkout;