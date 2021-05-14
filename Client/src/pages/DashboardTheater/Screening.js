import React ,{useEffect}from 'react' ; 
import styled from 'styled-components';
import AddButton from '../../Components/DashboardComps/Buttons/AddButton'
import ScreeningModal from '../../Components/DashboardComps/Modals/ScreeningModal'
import ScreeningTable from '../../Components/DashboardComps/Tables/ScreeningTable'
import { getScreenings } from '../../Redux/Actions/theater.actions';
import {useDispatch,useSelector} from 'react-redux'



const Wrapper=styled.div`
display: flex ; 
justify-content: center ; 
align-items : center ; 
flex-direction : column;
width:fit-content; 
height:fit-content; 

` ; 

const ScreeningPage = ()=>{
    const dispatch= useDispatch() ; 
    const [open, setOpen] = React.useState(false); 
   
    useEffect(()=>
    dispatch(getScreenings()),[])
    const rows= useSelector(state=> state.theater.screenings)


    const handleClick=()=>{
        setOpen(!open)
        
    }
    return(
    
    <>
        <ScreeningModal open={open} setOpen={setOpen}/>
        <Wrapper>
        <AddButton onClick={handleClick} layout={false }/> 
        <ScreeningTable rows={rows} open={open} setOpen={setOpen}/>
        </Wrapper>
       



    </>
    
    ) ; 


}

export default ScreeningPage ; 