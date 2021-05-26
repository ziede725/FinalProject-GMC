import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {RadioGroup,Radio,FormControlLabel,FormLabel} from '@material-ui/core'
import { editScreening} from '../../../Redux/Actions/theater.actions'
import { useDispatch } from 'react-redux';

export default function EditScreeningModal({id,open,setOpen}) {
    const [visibility,setVisibility]= React.useState('Private'); 
    const [movieName,setMovieName]= React.useState('') ; 
    const [date,setDate]= React.useState('') ; 
    const [startTime,setStartTime]= React.useState('') ; 
    const [endTime,setEndTime]= React.useState('') ; 
    const [discount,setDiscount]= React.useState('') ; 
    const [roomName,setRoomName] = React.useState('') ; 
    const [price,setPrice]= React.useState(''); 
    const dispatch = useDispatch() ; 
    
    console.log(visibility)
    
  useEffect(()=>{
    setOpen(open)
  },[open,setOpen])

  
  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Screening</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="movieName"
            label="Movie Name"
            onChange={(e)=>setMovieName(e.target.value)}
            type="search"
            fullWidth
          />
          
       
            <TextField
            autoFocus
            margin="dense"
            id="roomName"
            onChange={(e)=>setRoomName(e.target.value)}
            type="text"
            fullWidth
          />
             <TextField
            autoFocus
            margin="dense"
            id="price"
            placeholder="set price"
            onChange={(e)=>setPrice(e.target.value)}
            type="text"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            placeholder='set Discount'
            id="discount"
            onChange={(e)=>setDiscount(e.target.value)}
            type="number"
            fullWidth
          />
        
    <FormLabel component="legend">Visibility</FormLabel>
    <RadioGroup aria-label="gender" name="gender1" value={visibility} onChange={(e)=>setVisibility(e.target.value)}>
        <FormControlLabel value="Private" control={<Radio />} label="Private" />
        <FormControlLabel value="Public" control={<Radio />} label="Public" />
    </RadioGroup>
      
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=> {
            dispatch(editScreening(id,movieName, date,startTime,endTime, discount,visibility,roomName,price))
            console.log(visibility)
            handleClose()
          }} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
