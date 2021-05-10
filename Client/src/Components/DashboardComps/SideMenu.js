import React from 'react' ; 
import styled from 'styled-components';
import MovieOutlinedIcon from '@material-ui/icons/MovieOutlined';
import EventSeatOutlinedIcon from '@material-ui/icons/EventSeatOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import {useHistory} from 'react-router-dom'


const LeftSection = styled.div`
height:100vh ; 
background-color: #010916 ; 
width: 20% ; 
display: flex ; 
flex-direction: column ; 
opacity: 0.95;
justify-content: space-between ; 


`;
 
export const Wrapper=styled.div`
height:60%;
display: flex ; 
flex-direction: column ;
justify-content: space-between `

export const DashButton=styled.button`
border: none;
display: flex;
justify-content: space-between;
align-items: center;
height: fit-content;
width: 70%;
padding: 0.5rem 1rem;
font-size: 0.8rem;
font-weight: 700;
border-radius: 5px;
background-color: #eeeeee;
cursor: pointer;
margin-right: 1rem;
margin-left: 2rem; 
margin-top: 2rem; 

transition: 0.2s ease-out;
span {
  margin-right: 0.5rem;
  font-size: 1rem;
}
&:hover {
  background-color: #ffbb00;
  transition: 0.2s ease-in;
}
`;

const SideMenu =()=>{
    const  history = useHistory();
    const routeChange=(redirect)=> {
        let path = `/test/${redirect}`;
        history.push(path);
      }
      const routeHome=()=>{

        history.push('/')
      }
      
     
return(
    <>
    <LeftSection>
        <Wrapper> 
            <DashButton onClick={()=>{routeChange('reservations') 
            // we may Call axios here to get Data :) 
            // should be with redux to pass data of reservations to table ?
            }}>
            <span>Reservations</span>
            <EventSeatOutlinedIcon/>
            </DashButton>

            <DashButton onClick={()=>{routeChange('rooms')}}>
            <span>Rooms</span>
            <MeetingRoomOutlinedIcon/>
            </DashButton>

            <DashButton onClick={()=>routeChange('screenings')}>
            <span>Screenings</span>
            <VideocamOutlinedIcon/>
            </DashButton>

            <DashButton onClick={()=>routeChange('movie')}>
            <span>Add Movie</span>
            <MovieOutlinedIcon/>
            </DashButton>

            <DashButton onClick={()=>routeChange('settings')}>
            <span>Settings</span>
            <SettingsOutlinedIcon/>
            </DashButton>
            
            <DashButton onClick={()=>routeHome()}> 
            <span>Log Out </span>
            <ExitToAppOutlinedIcon/>
            </DashButton>
           
           
            
        
        </Wrapper>
       
    </LeftSection>
    
    </>
)
}
export default SideMenu ; 