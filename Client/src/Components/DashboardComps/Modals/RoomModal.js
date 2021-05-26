import React, { useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {addRoom} from '../../../Redux/Actions/theater.actions'
import {useDispatch} from 'react-redux'

const RoomModal=({open,setOpen})=> {
   const dispatch= useDispatch() ; 
   const [roomCapacity,setRoomCapacity]= useState('') ; 
   const [roomName,setRoomName] = useState('') ; 
   const handleClose = () => {
    setOpen(false) ; 
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
            onChange ={(event)=>setRoomName(event.target.value)}
            fullWidth
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Capacity"
            type="number"
            onChange={(event)=>setRoomCapacity(event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={
            
            ()=>{dispatch(addRoom(roomName,roomCapacity))
              handleClose() }
            
          }
             color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default RoomModal