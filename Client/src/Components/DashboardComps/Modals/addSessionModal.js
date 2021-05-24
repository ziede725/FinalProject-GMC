import React, { useEffect ,useState} from 'react';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {addSession, getSession} from '../../../Redux/Actions/theater.actions'
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
let schema = yup.object().shape({
  endTime: yup.string().required("you must enter endTime"),
  startTime:yup.string().required("you must enter startTime")

  });

const SessionModal=({open,setOpen,order,sessions})=> {
   const dispatch= useDispatch() ; 
   const [startTime,setStartTime]= useState('') ;
   const [endTime,setEndTime] = useState('') ;  
   const [sessionName,setSessionName] = useState('') ;  
   const [disabled,setDisabled]= useState(true) ; 
  
   const id = useSelector(state=>state.root.user._id)
   const str= 'HH:mm'
   const HOURS= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
   var hiddenHours=[]
   var hiddenStart=[]
  
   const handleClose = () => {
    setOpen(false) ;    
  };
  useEffect(()=>{
    setSessionName(`Session ${order}`)
    console.log('hello')
    dispatch(getSession())
    
  },[order])
  useEffect(()=>{setDisabled(true)},[sessions])
  // useEffect(()=>{
  //   const hour= startTime.split(":")[0] ; 
  //   hiddenHours=disabledHours(hour,HOURS)
    
  // },[startTime])

  const compareTime=(startTime,endTime)=>{

  }
  const disabledHours=(startTime,array)=>{
    const hour= startTime.split(":")[0] ; 
   return array.filter((el)=>el<=hour-1) 
  }
  const disabledHoursEnd=(startTime,array)=>{
    const hour = startTime.split(':')[0]; 
    return array.filter(el=> el<=hour )
  }
const handleDisabled=()=>{
  if(order>1)
  {
     
    return disabledHours(sessions[order-2].endTime,HOURS)
   
  }
  else{
    return [23,0,1,2,3,4,5,6,7]
}
}


  return (
    <div>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Session</DialogTitle>
        <DialogContent>
          <DialogWrapper>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Session Order"
            type="number"
            InputProps={{inputProps:{min:0 ,max:5}}}

            onChange ={(event)=>setOrder(event.target.value)}
            fullWidth
          /> */}
            <Wrapper>
            <TimePicker className='xxx'
            name="starTime" 
            placeholder='startTime'
            showSecond={false} 
            minuteStep={30}
            hideDisabledOptions={true}
            allowEmpty={false}
            disabledHours={()=>handleDisabled()}
            onChange={(value)=>{setStartTime(value.format(str))
            }
          }
            onOpen={()=>setDisabled(false)}
            required={true}/>
          <ArrowRightAltIcon/>
          <TimePicker 
          className="xxx"
          name="endTime"
          allowEmpty={false} 
          placeholder="endTime" 
          onChange={(value)=>setEndTime(value.format(str))}
          disabledHours={()=>disabledHoursEnd(startTime,HOURS)}
          hideDisabledOptions={true}
          minuteStep={30}
          disabled={disabled}
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
                dispatch(addSession(id, sessionName,order,startTime,endTime))
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