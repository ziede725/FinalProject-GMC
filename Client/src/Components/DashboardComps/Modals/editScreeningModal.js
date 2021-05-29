










import React, { useEffect } from 'react';
import 'rc-time-picker/assets/index.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {RadioGroup,Radio,FormControlLabel,FormLabel} from '@material-ui/core'
import {editScreening, getRooms, getSession} from '../../../Redux/Actions/theater.actions'
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import  styled from 'styled-components'
import { getMovies } from '../../../Redux/Actions/movie.actions';




const Wrapper= styled.div`
display:flex ;
wrap: wrap; `

export default function EditScreeningModal({id,open,setOpen,prevDate}) {
    const [visibility,setVisibility]= React.useState('Private'); 
    const [movieId,setMovieId]= React.useState('') ; 
    const [date,setDate]= React.useState(prevDate) ;  
    const [discount,setDiscount]= React.useState('') ; 
    const [room,setRoom] = React.useState('') ; 
    const [price,setPrice]= React.useState(''); 
    const [session,setSession]= React.useState() ; 
    const [filteredSessions,setFilteredSessions] = React.useState() ;
    const [disabled,setDisabled] = React.useState(true) ;  
    const movies = useSelector(state=>state.movie.movies)
    const sessions= useSelector(state=>state.theater.sessions)
    const rooms = useSelector(state=>state.theater.room)
    const screening = useSelector(state=>state.theater.screenings)
    const DATE = new Date() ; 
 
    const dispatch = useDispatch() ; 
  
    useEffect(()=>{
      if(visibility==="Public")
      {
        alert("Once Public the screening can't be edited anymore , are you sure ?")
      }
      
      
    },[visibility])
  useEffect(()=>{
    setOpen(open)
    dispatch(getMovies())
    dispatch(getSession())
    dispatch(getRooms())
    console.log(prevDate)
    
  },[open,setOpen])

  
  const handleClose = () => {
    setOpen(false);
  };

const formatDate = (date)=>{
  const [year,month,day]=date.substring(0,10).split("-")
  
}

  const handleChange= (sessions,date)=>{
    setDate(date.toLocaleDateString())
    setDisabled(false) ;
    const arr =sessions.filter(el=> !el.dates.includes(date.toLocaleDateString()))
    setFilteredSessions(arr) ; 
   

  }
  // const handleChange= (e)=>{

  //   if (e.target.value>)
  //   setPrice(e.target.value)
  // }


  return (
    <div>
        
      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Edit screening</DialogTitle>
        <DialogContent>
        

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
           <KeyboardDatePicker
          disablePast
          disableToolbar
          variant="inline"
          
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          value={date}
          onChange={(value)=>handleChange(sessions,value)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          autoOk={true}
        />
           </MuiPickersUtilsProvider>
          
         
        <Autocomplete
        id="combo-box-demo"
        options={filteredSessions}
       getOptionLabel={(option) => option.sessionName}
       style={{ width: 300 }}
       disabled={disabled}
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
            console.log(session)
           dispatch(editScreening(id,movieId, date,session, discount,visibility,room._id,price))
            handleClose()
          }} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}




















// import React, { useEffect } from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import {RadioGroup,Radio,FormControlLabel,FormLabel} from '@material-ui/core'
// import { editScreening} from '../../../Redux/Actions/theater.actions'
// import { useDispatch, useSelector } from 'react-redux';
// import Autocomplete from '@material-ui/lab/Autocomplete';

// export default function EditScreeningModal({id,open,setOpen}) {
//     const [visibility,setVisibility]= React.useState('Private'); 
//     const [room,setRoom] = React.useState('') ; 
//     const [movieId,setMovieId]= React.useState('') ; 
//     const [date,setDate]= React.useState('') ; 
//     const [discount,setDiscount]= React.useState('') ; 
//     const rooms = useSelector(state=>state.theater.room)
//     const movies = useSelector(state=>state.movie.movies)
//     const [price,setPrice]= React.useState(''); 
//     const dispatch = useDispatch() ; 
    
    
//   useEffect(()=>{
//     setOpen(open)
//   },[open,setOpen])

  
//   const handleClose = () => {
//     setOpen(false);
//   };
  

//   return (
//     <div>
      
//       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//         <DialogTitle id="form-dialog-title">Edit Screening</DialogTitle>
//         <DialogContent>
          
//         <Autocomplete
//         id="combo-box-demo"
//         options={movies}
//          getOptionLabel={(option) => option.title}
//         style={{ width: 300 }}
//        onChange={(event,value)=> value && setMovieId(value._id)}
//        renderInput={(params) => <TextField {...params} label="Select available movies" variant="outlined" />}
//        />

//       <Autocomplete
//         id="roomName"
//         options={rooms}
//        getOptionLabel={(option) => option.roomName}
//        style={{ width: 300 }}
//        onChange={(event,value)=> setRoom(value)}
//        renderInput={(params) => <TextField {...params} label="Select a room" variant="outlined" />}
//        />

          
       
//              <TextField
//             autoFocus
//             margin="dense"
//             id="price"
//             placeholder="set price"
//             onChange={(e)=>setPrice(e.target.value)}
//             type="text"
//             fullWidth
//           />
//            <TextField
//             autoFocus
//             margin="dense"
//             placeholder='set Discount'
//             id="discount"
//             onChange={(e)=>setDiscount(e.target.value)}
//             type="number"
//             fullWidth
//           />
        
//     <FormLabel component="legend">Visibility</FormLabel>
//     <RadioGroup aria-label="gender" name="gender1" value={visibility} onChange={(e)=>setVisibility(e.target.value)}>
//         <FormControlLabel value="Private" control={<Radio />} label="Private" />
//         <FormControlLabel value="Public" control={<Radio />} label="Public" />
//     </RadioGroup>
      
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={()=> {
//             dispatch(editScreening(id,movieId, date, discount,visibility,room._id,price))
//             handleClose()
//           }} color="primary">
//             Save changes
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }



