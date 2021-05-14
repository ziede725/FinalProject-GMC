import React, { useEffect } from 'react' ; 
import RoomsTable from '../../Components/DashboardComps/Tables/RoomsTable';
import AddButton from '../../Components/DashboardComps/Buttons/AddButton'
import styled from 'styled-components';
import RoomModal from '../../Components/DashboardComps/Modals/RoomModal'
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from '../../Redux/Actions/theater.actions';

const Wrapper=styled.div`
display: flex ; 
justify-content: center ; 
align-items : center ; 
flex-direction : column;
width:fit-content; 
height:fit-content; 

` ; 
const Rooms =()=>{
    const dispatch= useDispatch() ; 
    const [open, setOpen] = React.useState(false); 
    useEffect(()=>
    dispatch(getRooms()),[])
    const rows= useSelector(state=> state.theater.room)
    const handleClick=()=>{
        setOpen(!open)
        console.log('handleclick')
    }

    return (
        <>
        <RoomModal open={open} setOpen={setOpen}/>
       
       <AddButton onClick={handleClick} layout={true }></AddButton>
       <RoomsTable rows={rows} open={open} setOpen={setOpen} />
  
        </>
    )

}
export default Rooms ; 