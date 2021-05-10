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
import EditButton from '../Buttons/EditButton'

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
const createData=(screeningId, movieName,date,startTime ,endTime,discount,visibility )=> 
{
    return {screeningId, movieName,date,startTime ,endTime,discount,visibility }
}
 
const TableWrapper=styled.div`
display: flex ; 
flex-direction: column`
const StyledDivFlexRow= styled.div`
display: flex ; 
`
const rows=[
    createData(1,123,'amara','resID','qqq','qqq','qqq'),
   createData(1,123,'amara','resID','qqq','qqq','qqq'),
   createData(1,123,'amara','resID','qqq','qqq','qqq'),
   createData(1,123,'amara','resID','qqq','qqq','qqq'),
   createData(1,123,'amara','resID','qqq','qqq','qqq'),
   createData(1,123,'amara','resID','qqq','qqq','qqq'),
   createData(1,123,'amara','resID','qqq','qqq','qqq'),
   createData(1,123,'amara','resID','qqq','qqq','qqq'),
   createData(1,123,'amara','resID','qqq','qqq','qqq'),
   createData(1,123,'amara','resID','qqq','qqq','qqq'),
   createData(1,123,'amara','resID','qqq','qqq','qqq'),
   createData(1,123,'amara','resID','qqq','qqq','qqq'),
   createData(1,123,'amara','resID','qqq','qqq','qqq'),
   
    
] ; 


const ScreeningTable=()=>{
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

  <Table className={classes.table}>
            <TableHead title='Reservations'>
                <TableRow>
                    <TableCell align="center">ScreeningId</TableCell>
                    <TableCell align="center">Movie Name</TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Start Time </TableCell>
                    <TableCell alignt="center">End Time </TableCell>
                    <TableCell alignt="center">Discount </TableCell>
                    <TableCell alignt="center">Published/Private</TableCell>
                   
                </TableRow>
            </TableHead>

            <TableBody>
                { rows.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((row)=>(
                    <StyledTableRow key={row.name}>
                    <TableCell align="left">{row.screeningId}</TableCell>
                    <TableCell align="left">{row.movieName}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">{row.startTime}</TableCell>
                    <TableCell align="left">{row.endTime}</TableCell>
                    <TableCell align="left">{row.discount}</TableCell>
                    <TableCell align="left">{row.visibility}</TableCell>
                    <StyledDivFlexRow> <DeleteButton onClick={()=>console.log('hello')}/>
                    <EditButton/></StyledDivFlexRow>
                   
                
                     </StyledTableRow>
                    
                ))
                }
                 <TablePagination
      component="div"
      rowsPerPageOptions={[5,10]}
      count={rows.length}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />

            </TableBody>
        </Table>

       
  
    </>
)
} 
export default ScreeningTable ; 
