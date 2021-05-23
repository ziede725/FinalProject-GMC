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
import { useSelector } from 'react-redux';

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
    },
  });

 
const TableWrapper=styled.div`
position: absolute;
width:60%;
margin-left: 3%

`
const SessionTable=()=>{
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const sessions = useSelector(state=>state.theater.sessions)
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
                    <TableCell align="left">Session Name</TableCell>
                    <TableCell align="left">Start Time </TableCell>
                    <TableCell align="left">End Time</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                { sessions.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((row)=>(
                    <StyledTableRow key={row._id}>
                    <TableCell align="left">{row.sessionName}</TableCell>
                    <TableCell align="left">{row.startTime}</TableCell>
                    <TableCell align="left">{row.endTime}</TableCell>
                    <DeleteButton onClick={()=>console.log()}/>
                     </StyledTableRow>
                    
                ))
                }
                 <TablePagination
      component="div"
      rowsPerPageOptions={[5,10]}
      count={sessions.length}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />

            </TableBody>
        </Table>
  </TableWrapper>
        
  
    </>
)
} 
export default SessionTable ; 
