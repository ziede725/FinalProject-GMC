import React, { useEffect } from 'react' ; 
import styled from 'styled-components';
import SideMenu from '../../Components/DashboardComps/SideMenu';
import AddMovie from './AddMovie'
import {Route} from 'react-router-dom'
import DataTable from '../../Components/DashboardComps/Tables/DataTable'
import Rooms from './Rooms';
import ScreeningPage from './Screening'

const Content=styled.div`

`; 

const DashWrapper=styled.div`
display:flex ; `

const Dashboard=({match})=>{
    
    useEffect(()=>{
        console.log('hello')
    },[])
    return(
        <>
        <DashWrapper>
        <SideMenu></SideMenu>
        <Content>
        <Route path={`${match.path}/movie`} component={AddMovie}/>
        <Route path={`${match.path}/reservations`} component={DataTable}/>
        <Route path={`${match.path}/rooms`} component={Rooms}/>
        <Route path={`${match.path}/screenings`} component={ScreeningPage}/>
            
        </Content>
        </DashWrapper>
        
        </>
    )

}
export default Dashboard ; 