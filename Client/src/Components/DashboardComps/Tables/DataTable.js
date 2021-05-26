import React from 'react' ; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {makeStyles,withStyles} from '@material-ui/core'
import styled from 'styled-components';
import TablePagination from '@material-ui/core/TablePagination';
import DeleteButton from '../Buttons/DeleteButton'

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
const useStyles = makeStyles({
    table: {
      width:'100%',
      marginLeft:"40px" 
    },
  });
const createData=(customerId, ScreeningID, roomName, ReservationID )=> 
{
    return {customerId, ScreeningID, roomName, ReservationID}
}
 
const TableWrapper=styled.div`
position: absolute;
width:60%;

`
const rows=[
    createData(1,123,'amara','resID'),
    createData(1,123,'hela','resID'),
    createData(1,123,'salle2','resID'),
    createData(1,123,'amara','resID'),
    createData(1,123,'hela','resID'),
    createData(1,123,'salle2','resID'),
    createData(1,123,'amara','resID'),
    createData(1,123,'hela','resID'),
    createData(1,123,'salle2','resID'),
    createData(1,123,'amara','resID'),
    createData(1,123,'hela','resID'),
    createData(1,123,'salle2','resID'),
    createData(1,123,'amara','resID'),
    createData(1,123,'hela','resID'),
    createData(1,123,'salle2','resID'),
    createData(1,123,'amara','resID'),
    createData(1,123,'hela','resID'),
    createData(1,123,'salle2','resID')
    
] ; 


const DataTable=()=>{
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const classes = useStyles() ; 

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
return (
    <>
  <TableWrapper>
  <Table className={classes.table}>
            <TableHead title='Reservations'>
                <TableRow>
                    <TableCell align="left">Customer Name</TableCell>
                    <TableCell align="left">Screening</TableCell>
                    <TableCell align="left">Room Name</TableCell>
                    <TableCell align="left">Reservation ID</TableCell>
                    <TableCell alignt="left">Cancel</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                { rows.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((row)=>(
                    <StyledTableRow key={row.ReservationID}>
                    <TableCell align="left">{row.customerId}</TableCell>
                    <TableCell align="left">{row.ScreeningID}</TableCell>
                    <TableCell align="left">{row.roomName}</TableCell>
                    <TableCell align="left">{row.ReservationID}</TableCell>
                    <DeleteButton onClick={()=>console.log()}/>
                     </StyledTableRow>
                    
                ))
                }
   

            </TableBody>
        </Table>
        <TablePagination
      component="div"
      rowsPerPageOptions={[5,10]}
      count={rows.length}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  </TableWrapper>
  
        
  
    </>
)
} 
export default DataTable ; 
