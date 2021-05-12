import React, { useEffect } from 'react' ; 
import styled from 'styled-components';
import SideMenu from '../../Components/DashboardComps/SideMenu';
import AddMovie from './AddMovie'
import {Route} from 'react-router-dom'
import DataTable from '../../Components/DashboardComps/Tables/DataTable'
import Rooms from './Rooms';
import ScreeningPage from './Screening'
import Settings from './Settings'
import Dash from './welcomePage'

const Content=styled.div`
width: 100%; 
`; 

const DashWrapper=styled.div`
display:flex ; `

const Dashboard=({match})=>{
    
    useEffect(()=>{
        console.log('hello')
        console.log(`${match.path}`)
    },[])
    return(
        <>
        <DashWrapper>
        <SideMenu/>
        <Content>
        <Route exact path={`${match.path}/`} component={Dash}/>
        <Route path={`${match.path}/movie`} component={AddMovie}/>
        <Route path={`${match.path}/reservations`} component={DataTable}/>
        <Route path={`${match.path}/rooms`} component={Rooms}/>
        <Route path={`${match.path}/screenings`} component={ScreeningPage}/>
        <Route path={`${match.path}/settings`} component={Settings}/>
            
        </Content>
        </DashWrapper>
        
        </>
    )

}
export default Dashboard ; 