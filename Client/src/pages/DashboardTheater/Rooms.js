import React from 'react' ; 
import RoomsTable from '../../Components/DashboardComps/Tables/RoomsTable';
import AddButton from '../../Components/DashboardComps/Buttons/AddButton'
import styled from 'styled-components';
import RoomModal from '../../Components/DashboardComps/Modals/RoomModal'



const Wrapper=styled.div`
display: flex ; 
justify-content: center ; 
align-items : center ; 
flex-direction : column;
width:fit-content; 
height:fit-content; 

` ; 
const Rooms =()=>{
    const [open, setOpen] = React.useState(false);
    const handleClick=()=>{
        setOpen(!open)
     
    }

    return (
        <>
        <RoomModal open={open} setOpen={setOpen}/>
       
       <AddButton onClick={handleClick} layout={true }>Add Room</AddButton>
       <RoomsTable/>
      
        
       
    

      
        
        </>
    )

}
export default Rooms ; 