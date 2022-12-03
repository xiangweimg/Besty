import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import './ReviewModal.css'

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

export default function ReviewModal({message}) {
  const [openModal, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  // if(message === 'Only one comment allowed'){
  //   setOpen(true)
  // }
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='cart-modal'>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {message}
            </Typography>
            <Typography className="modal-modal-description" sx={{ mt: 2 }}>
                {message}.
                <span onClick={handleClose} id='keep-shopping-btn'>Keep shooping <EastIcon sx={{ fontSize: 20 }}/></span>
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}