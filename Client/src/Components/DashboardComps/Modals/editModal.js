import React, { useEffect ,useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {addRoom, editRoom} from '../../../Redux/Actions/theater.actions'
import {useDispatch} from 'react-redux'
import { FormGroup } from '@material-ui/core';


const EditModal=({roomNamee,roomCapacityy,open,handleModal,id})=> {
   const dispatch= useDispatch() ; 
   const [roomCapacity,setRoomCapacity]= useState(roomCapacityy) ; 
   const [roomName,setRoomName] = useState(roomNamee) ; 


  return (
    <div>
      
      <Dialog open={open} onClose={handleModal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Room</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="roomName"
            label="Room Name"
            type="text"
            onChange ={(event)=>setRoomName(event.target.value)}
            fullWidth
            value = {roomName}
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="roomCapacity"
            label="Capacity"
            type="number"
            onChange={(event)=>setRoomCapacity(event.target.value)}
            value={roomCapacity}
            fullWidth
          />
         
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModal} color="primary">
            Cancel
          </Button>
          <Button onClick={
            
            ()=>{dispatch(editRoom(roomName,roomCapacity,id))
              handleModal()
             }
            
          }
             color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default EditModal ; 