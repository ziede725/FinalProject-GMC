import React,{useEffect} from 'react' ; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {makeStyles,withStyles} from '@material-ui/core'
import styled from 'styled-components';
import TablePagination from '@material-ui/core/TablePagination';
import DeleteButton from '../Buttons/DeleteButton'  
import { useDispatch, useSelector } from 'react-redux';
import EditSessionModal from '../Modals/EditSessionModal'
import { id } from 'date-fns/locale';
import { deleteSession, getSession } from '../../../Redux/Actions/theater.actions'

const EditButton = styled.button`

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
    const [open,setOpen] = React.useState(false) ;  
    const [order,setOrder]=React.useState() ; 
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const sessions = useSelector(state=>state.theater.sessions)
    const[id,setId]= React.useState() ; 
    const classes = useStyles() ; 
    const dispatch = useDispatch() ; 
    useEffect(()=>{
      dispatch(getSession()) ; 
    },[])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
      const handleEdit=(order,id)=>{
          setOpen(!open)
          setOrder(order) ; 
          setId(id)

      }
return (
    <>
    <EditSessionModal open={open} setOpen={setOpen} id={id} order={order} sessions={sessions}/>
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
                    {/* <DeleteButton onClick={()=>dispatch(deleteSession(row._id))}/> */}
                    <button onClick={()=> dispatch(deleteSession(row._id))}>Delete</button>
                    <EditButton onClick={()=>handleEdit(row.order,row._id)}>edit </EditButton>        
                     </StyledTableRow>
                    
                ))
                }
             

            </TableBody>
        </Table>
        <TablePagination
      component="div"
      rowsPerPageOptions={[5,10]}
      count={sessions.length}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  </TableWrapper>
        
  
    </>
)
} 
export default SessionTable ; 
