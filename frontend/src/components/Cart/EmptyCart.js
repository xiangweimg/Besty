import { Link } from "react-router-dom";
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import './EmptyCart.css'

function EmptyCart() {

    return (
        <div className="cart-empty">
            <h1>
                Your cart is empty.
            </h1> 
            <Link className="link" to='/'>Discover something unique to fill it up</Link>
            <p>
               <EnergySavingsLeafIcon/> Betsy offsets carbon emissions from every delivery
            </p> 
        </div>
    )
  }
  
  export default EmptyCart;