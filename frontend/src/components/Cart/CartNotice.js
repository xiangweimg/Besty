import React from "react";
import HandshakeIcon from '@mui/icons-material/Handshake';
import './CartNotice.css';

function CartNotice() {

  return (
    <div className="cart-policy">
    <HandshakeIcon className="cart-policy-icon" color="action" sx={{ fontSize: 40 }}/> 
    <p>Betsy Purchase Protection: Shop confidently on Betsy knowing if 
      something goes wrong with an order, we've got your back.</p>
    </div>
  )
}

export default CartNotice;