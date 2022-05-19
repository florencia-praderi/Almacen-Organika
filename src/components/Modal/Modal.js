import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';

const Modal = ({handleClose, open, children})=>{
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
            Modal
            </DialogContent>
        </Dialog>
    )
}

export default Modal