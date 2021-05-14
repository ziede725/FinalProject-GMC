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
import {useDispatch, useSelector} from 'react-redux'
import {deleteScreening} from '../../../Redux/Actions/theater.actions'

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
display: flex ; 
flex-direction: column`
const StyledDivFlexRow= styled.div`
display: flex ; 
`
 


const ScreeningTable=({rows,open,setOpen})=>{
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
   const dispatch=useDispatch(); 
    const classes = useStyles() ; 
   rows.map(row=> console.log(row.published))

   const handleClick=(id)=>{
    dispatch(deleteScreening(id))
    
  }
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
                  
                    <StyledTableRow key={row._id}>
                    <TableCell padding='default' align="center"children={row.movieName}/>
                    <TableCell padding='default' align="center" children={row.date}/>
                    <TableCell padding='default' align="center" children={row.startTime}/>
                    <TableCell padding='default' align="center" children={row.endTime}/>
                    <TableCell padding='default' align="center" children={row.discount}/>
                    <TableCell padding='default' align="center" children={row.published}/>
                    <StyledDivFlexRow> 
                    <DeleteButton handleClick={()=>handleClick(row._id)}/>
                    <EditButton id={rows._id}/>
                     
                    </StyledDivFlexRow>
                   
                
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
