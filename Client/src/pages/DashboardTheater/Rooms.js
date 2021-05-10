import React from 'react' ; 
import RoomsTable from '../../Components/DashboardComps/Tables/RoomsTable';
import AddButton from '../../Components/DashboardComps/Buttons/AddButton'
import styled from 'styled-components';
import RoomModal from '../../Components/DashboardComps/Modals/RoomModal'


const WrapperFlex = styled.div`
display: flex ; 
flex-direction : column 
justify-content: space-around`
const Rooms =()=>{
    const [open, setOpen] = React.useState(false);
    const handleClick=()=>{
        setOpen(!open)
     
    }

    return (
        <>
        <RoomModal open={open} setOpen={setOpen}/>
       <WrapperFlex>
       <AddButton onClick={handleClick} layout={true }>Add Room</AddButton>
       </WrapperFlex>
       <WrapperFlex>
       <RoomsTable></RoomsTable>
       </WrapperFlex>
        
       
    

      
        
        </>
    )

}
export default Rooms ; 