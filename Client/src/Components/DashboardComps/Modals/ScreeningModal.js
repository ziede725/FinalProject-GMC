import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ScreeningModal({open,setOpen}) {

  useEffect(()=>{
    setOpen(open)
  },[open])

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
            label="Movie Name"
            type="search"
            fullWidth
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
           
            type="date"
            fullWidth
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            
            type="time"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            
            type="time"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Public/Private"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
