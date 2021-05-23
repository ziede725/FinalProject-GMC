import React, { useEffect ,useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {addSession} from '../../../Redux/Actions/theater.actions'
import {useDispatch, useSelector} from 'react-redux'
import TimePicker from 'rc-time-picker'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import styled from 'styled-components'

const Wrapper =styled.div`
display: flex ; 
justify-content: center ;

`
const DialogWrapper= styled.div`
display: flex ; 
flex-direction: column ; 
align-items: center; 
justify-content: space-between ; 
`


const SessionModal=({open,setOpen})=> {
   const dispatch= useDispatch() ; 
   const [startTime,setStartTime]= useState('') ;
   const [endTime,setEndTime] = useState('') ;  
   const [sessionName,setSessionName] = useState('') ; 
   const id = useSelector(state=>state.root.user._id)
   const str= 'HH:mm'
   const handleClose = () => {
    setOpen(false) ;    
  };


  return (
    <div>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Session</DialogTitle>
        <DialogContent>
          <DialogWrapper>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Session Name"
            type="text"
            onChange ={(event)=>setSessionName(event.target.value)}
            fullWidth
          />
            <Wrapper>
            <TimePicker className='xxx' 
            placeholder='startTime'
            showSecond={false} 
            minuteStep={30}
            onChange={(value)=>setStartTime(value.format(str))}/>
          <ArrowRightAltIcon/>
          <TimePicker 
          className="xxx" 
          placeholder="endTime" 
          onChange={(value)=>setEndTime(value.format(str))}
          minuteStep={30}
          showSecond={false}/>
            </Wrapper>
          </DialogWrapper>
          
          
          
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={
            
            ()=>{
                dispatch(addSession(id, sessionName,startTime,endTime))
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
export default SessionModal ; 