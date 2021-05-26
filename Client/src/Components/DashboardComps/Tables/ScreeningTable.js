import React from 'react' ; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {makeStyles,TableContainer,withStyles} from '@material-ui/core'
import styled from 'styled-components';
import TablePagination from '@material-ui/core/TablePagination';
import DeleteButton from '../Buttons/DeleteButton'
import {useDispatch, useSelector} from 'react-redux'
import {deleteScreening} from '../../../Redux/Actions/theater.actions'
import EditScreeningButton from '../Buttons/editScreeningButton';
import Paper from '@material-ui/core/Paper';

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
    const movies = useSelector(state=>state.movie.movies)
    const sessions = useSelector(state=>state.theater.sessions)
    const dispatch=useDispatch(); 
    const classes = useStyles() ;
    console.log("rows", rows )
    

    const handleMovie = (id)=>{
     let movie =  movies.find(el=> el._id ===id)
    //  const {genres,reviews,_id,title,runTime,Language,Overview,date,trailerUrl,img} 
     return movie.title
    }
    const handleTime = (time,id)=>{
      let session = sessions.find(el=> el._id === id)
      console.log(session)
      if (time)
      {
        return (session.startTime) ; 
      }
      else {
        return (session.endTime) ; 
      }
    }

   const handleClick=(id,visibility)=>{
     if(visibility==='Public')
     {
       alert('You can not delete a public screening') ; 
     }
     else {
      dispatch(deleteScreening(id))
     }

    
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
                    <TableCell padding='default' align="center" children={handleMovie(row.movieId)}/>
                    <TableCell padding='default' align="center" children={row.date}/>
                    <TableCell padding='default' align="center" children={handleTime(true,row.sessionId)}/>
                    <TableCell padding='default' align="center" children={handleTime(false,row.sessionId)}/>
                    <TableCell padding='default' align="center" children={row.discount}/>
                    <TableCell padding='default' align="center" children={row.visibility}/>
                    <StyledDivFlexRow> 
                    <DeleteButton published={row.visibility} handleClick={()=>handleClick(row._id,row.visibility)}/>
                    <EditScreeningButton id={row._id} 
                    published={row.visibility}/>
                     
                    </StyledDivFlexRow>
                   
                
                     </StyledTableRow>
                    
                ))
                }
    

            </TableBody>
      
        </Table>
     
        </TableContainer>
        <TablePagination
      component="div"
      rowsPerPageOptions={[5,10]}
      count={rows.length}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />  
  
    </>
)
} 
export default ScreeningTable ; 
