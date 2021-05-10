import React from 'react' ; 
import styled from 'styled-components';
import AddButton from '../../Components/DashboardComps/Buttons/AddButton'
import ScreeningModal from '../../Components/DashboardComps/Modals/ScreeningModal'
import ScreeningTable from '../../Components/DashboardComps/Tables/ScreeningTable'


const Wrapper=styled.div`
display: flexbox ; 
justify-content: center ; 
align-items : flex-end ; 
flex-direction : row
width:fit-content
height: fit-content ; 
` ; 

const ScreeningPage = ()=>{
    const [open,setOpen]= React.useState(false)
    const handleClick=()=>{
    setOpen(!open)
    }
    return(
    
    <>
        <ScreeningModal open={open} setOpen={setOpen}/>
        <Wrapper>
        <AddButton onClick={handleClick} layout={false }/> 
        <ScreeningTable/>
        </Wrapper>
       



    </>
    
    ) ; 


}

export default ScreeningPage ; 