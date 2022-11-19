import { Link } from "react-router-dom";
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import './EmptyCart.css'

function EmptyCart({message}) {

    return (
        <div className="cart-empty">
            {message === 'checkout' &&
            <h1>Thank you for your order.</h1>}
            { message === 'empty' && 
            <h1>Your cart is empty.</h1> 
            }
            <Link id="link" to='/'>Discover something unique to fill it up</Link>
            <p>
               <EnergySavingsLeafIcon/> Betsy offsets carbon emissions from every delivery
            </p> 
        </div>
    )
  }
  
  export default EmptyCart;