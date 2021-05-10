import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {RadioGroup,Radio,FormControlLabel,FormLabel} from '@material-ui/core'

export default function ScreeningModal({open,setOpen}) {
    const [value,setValue]= React.useState('Private'); 
  useEffect(()=>{
    setOpen(open)
  },[open,setOpen])

  
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange=(event)=>{
    setValue(event.target.value);

  }

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
        
    <FormLabel component="legend">Visibility</FormLabel>
    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Private" control={<Radio />} label="Private" />
        <FormControlLabel value="Public" control={<Radio />} label="Public" />
    </RadioGroup>
      
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
