import React, { useEffect } from 'react';
import 'rc-time-picker/assets/index.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TimePicker from 'rc-time-picker'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {RadioGroup,Radio,FormControlLabel,FormLabel} from '@material-ui/core'
import {addScreening} from '../../../Redux/Actions/theater.actions'
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import moment from 'moment';
import  styled from 'styled-components'



const Wrapper= styled.div`
display:flex ;
wrap: wrap; `

export default function ScreeningModal({open,setOpen}) {
    const [visibility,setVisibility]= React.useState('Private'); 
    const [movieId,setMovieId]= React.useState('') ; 
    const [date,setDate]= React.useState('') ; 
    const [startTime,setStartTime]= React.useState('') ; 
    const [endTime,setEndTime]= React.useState('') ; 
    const [discount,setDiscount]= React.useState('') ; 
    const [room,setRoom] = React.useState('') ; 
    const [price,setPrice]= React.useState(''); 
    const [session,setSession]= React.useState("") ; 
    const movies = useSelector(state=>state.movie.movies)
    const sessions= useSelector(state=>state.theater.sessions)
    const rooms = useSelector(state=>state.theater.room)
 
    const dispatch = useDispatch() ; 
   
    
  useEffect(()=>{
    setOpen(open)
  },[open,setOpen])

  
  const handleClose = () => {
    setOpen(false);
  };
  // const handleChange= (e)=>{

  //   if (e.target.value>)
  //   setPrice(e.target.value)
  // }
  const showSecond = true;
  const str = showSecond ? 'HH:mm:ss' : 'HH:mm';
  
  const now = moment().hour(14).minute(30);
  
  function generateOptions(length, excludedOptions) {
    const arr = [];
    for (let value = 0; value < length; value++) {
      if (excludedOptions.indexOf(value) < 0) {
        arr.push(value);
      }
    }
    return arr;
  }
  
  function onChange(value) {
    console.log(value && value.format(str));
  }
  
  function disabledHours() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
  }
  
  function disabledMinutes(h) {
    switch (h) {
      case 9:
        return generateOptions(60, [30]);
      case 21:
        return generateOptions(60, [0]);
      default:
        return generateOptions(60, [0, 30]);
    }
  }
  
  function disabledSeconds(h, m) {
    return [h + m % 60];
  }

  return (
    <div>
        
      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new screening</DialogTitle>
        <DialogContent>
        
         
        <Autocomplete
        id="combo-box-demo"
        options={sessions}
       getOptionLabel={(option) => option.sessionName}
       style={{ width: 300 }}
       onChange={(event,value)=> value && setSession(value._id)}
       renderInput={(params) => <TextField {...params} label="Select available session" variant="outlined" />}
       />

          
         
             <Autocomplete
        id="combo-box-demo"
        options={movies}
       getOptionLabel={(option) => option.title}
       style={{ width: 300 }}
       onChange={(event,value)=> value && setMovieId(value._id)}
       renderInput={(params) => <TextField {...params} label="Select available movies" variant="outlined" />}
       />

          
        
           <MuiPickersUtilsProvider utils={DateFnsUtils}>
           <KeyboardDatePicker
          disablePast
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          
          onChange={(value)=>console.log(value)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
           </MuiPickersUtilsProvider>
          
         
             <Autocomplete
        id="roomName"
        options={rooms}
       getOptionLabel={(option) => option.roomName}
       style={{ width: 300 }}
       onChange={(event,value)=> setRoom(value)}
       renderInput={(params) => <TextField {...params} label="Select a room" variant="outlined" />}
       />
             <TextField
            autoFocus
            margin="dense"
            id="price"
            placeholder="set price of tickets "
            onChange={(e)=>setPrice(e.target.value)}
            InputProps={{inputProps:{min:0}}}
            type="number"
            
            fullWidth
            required={true}
          />
           <TextField
            autoFocus
            margin="dense"
            placeholder='set Discount'
            id="discount"
            onChange={(e)=>setDiscount(e.target.value)}
            InputProps={{inputProps:{min:0}}}
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
           dispatch(addScreening(movieId, date,startTime,endTime, discount,visibility,room._id,price))
            
            
            handleClose()
          }} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
