import React from 'react' ; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {makeStyles,withStyles,TableContainer} from '@material-ui/core'
import styled from 'styled-components';
import TablePagination from '@material-ui/core/TablePagination';
import DeleteButton from '../Buttons/DeleteButton'
import EditButton from '../Buttons/EditButton'
import {useDispatch, } from 'react-redux'
import { deleteRoom, } from '../../../Redux/Actions/theater.actions';
import {Paper} from '@material-ui/core/Paper/Paper'

const StyledDivFlexRow= styled.div`
display: flex ; 
`

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
const useStyles = makeStyles({
    table: {
      width:'70%',
      marginLeft:"15%"
    },
  });
// const createData=(roomName, capacity )=> 
// {
//     return {roomName, capacity}
// }
 
const TableWrapper=styled.div`
position: absolute;
width:60%;
margin-left: 3%

`
// const rows=[
//    createData('salle 1', 40),
//    createData('salle 2', 32),
//    createData('salle 3', 24),
//    createData('salle 4', 30),

    
// ] ; 



const RoomsTable=({rows})=>{
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // const [openEdit,setOpenEdit]= useState(false) ; 
   
    const classes = useStyles() ; 
    const dispatch = useDispatch() ; 
    const handleClick=(id)=>{
      dispatch(deleteRoom(id))
      
      
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
  <TableContainer component={Paper}>
  <Table className={classes.table}>
            <TableHead title='Reservations'>
                <TableRow>
                    <TableCell align="left">Room Name</TableCell>
                    <TableCell align="left">Capacity</TableCell>
                   
                    
                </TableRow>
            </TableHead>

            <TableBody>
                { rows.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((row)=>(
                    <StyledTableRow key={row._id}>
                    <TableCell align="center">{row.roomName}</TableCell>
                    <TableCell align="center">{row.roomCapacity}</TableCell>
                  
                    <StyledDivFlexRow>
                    <DeleteButton handleClick={()=> handleClick(row._id)}/>
                    <EditButton 
                    roomNamee={row.roomName}
                    id={row._id}
                    roomCapacityy={row.roomCapacity}
                    />
          

                    </StyledDivFlexRow>
                    
                     </StyledTableRow>
                    
                ))
                }
              

            </TableBody>
        </Table>
        {/* <TablePagination
      component="div"
      rowsPerPageOptions={[5,10]}
      count={rows.length}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />   */}
  </TableContainer>     
 
    </>
)
} 
export default RoomsTable ; 
