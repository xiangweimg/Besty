import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { createCart } from '../../store/cart';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import './CartModal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CartModal({prop}) {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("Added to cart")
  const [message, setMessage] = useState("")
  const dispatch = useDispatch()
  const handleClose = () => setOpen(false);
  const carts = useSelector(state => Object.values(state.carts))
  const productId = useParams()

  let cart_quantity = 0
  carts.forEach(cart => {
    if(cart.productId === parseInt(productId.productId)){
        cart_quantity = cart.quantity
        }
    }
    )
    let total = prop.quantity + cart_quantity
  const add_to_cart = (e) =>{
    e.preventDefault()
    if(total > prop.availability){
        setAlert("Failed to add")
        setMessage('Exceed stock, please check your cart or adjust your quantity')
        setOpen(true)
    }else{
        setMessage(`${prop.quantity} item(s) added to cart`)
        dispatch(createCart(prop.productId, prop.quantity, prop.sessionUserId))
        setOpen(true)
        // setShowModal(prev => !prev)
    }
};

  return (
    <div>
      <Button id="add-to-cart" onClick={add_to_cart}>Add to cart</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='cart-modal'>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {alert}
            </Typography>
            <Typography className="modal-modal-description" sx={{ mt: 2 }}>
                {message}.
                <Link to='/cart' id='view-cart-btn'>View cart & check out </Link>
                <span onClick={handleClose} id='keep-shopping-btn'>Keep shooping <EastIcon sx={{ fontSize: 20 }}/></span>
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}