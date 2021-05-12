import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import addRoom from '../../../Redux/Actions/theater.actions'
import {useDispatch} from 'react-redux'

export default function RoomModal({open,setOpen}) {
   const dispatch= useDispatch() ; 
  useEffect(()=>{
    setOpen(open)
  },[open,setOpen])

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Room</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room Name"
            type="text"
            fullWidth
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Capacity"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={
            
            dispatch(addRoom())
            
          }
             color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
