import React, { useEffect} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Account from "./pages/Account/Account";
import Reservations from "./pages/Reservations/Reservations";
import Favorites from "./pages/Favorites/Favorites";
import {PaperFormLogin,PaperFormRegister} from "./pages/Login/Paper"
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import Dashboard from './pages/DashboardTheater/Dashboard'
import PrivateRoute from './pages/Routes/PrivateRoute' ; 
import { useSelector } from "react-redux";
import MoviePage from './pages/MoviePage/MoviePage'
import {useDispatch} from 'react-redux'
import { getUser } from "./Redux/Actions/actions";
import { getMovies } from "./Redux/Actions/movie.actions";
import { getRooms, getScreenings, getSession } from "./Redux/Actions/theater.actions";
import ResetPassword from './pages/ResetPassword/ResetPassword'




function App() {
  //Use isAuth for the global authentication state (or Redux)
  const isAuth = useSelector( state=> state.root.isAuth)
  const userMail = useSelector(state=>state.root.user.email)
  const dispatch= useDispatch() ; 
  const error = useSelector(state=>state.root.error) ;  
 
  
 
  
  //******************************************************** */
  const [location, setLocation] = React.useState("Tunis");
 useEffect(()=>{
  dispatch(getUser())
  dispatch(getMovies())
  dispatch(getScreenings())
  dispatch(getRooms())
  dispatch(getSession())


 })
 

  console.log(error)
  
  return (
    <>

  <ThemeProvider theme={theme}>
  <Navigation
        auth={isAuth}
        setLocation={setLocation}
        location={location}
      />
  </ThemeProvider>
   


      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={PaperFormRegister} />
        <Route path="/login" component={PaperFormLogin} />
        <Route path="/my-account" component={Account} />
        <Route path="/my-reservations" component={Reservations} />
        <Route path="/my-favorites" component={Favorites} />
        <Route path={`/Movie/:id`} component={MoviePage}/>
        <Route path={`/reset-password/:token`} component={ResetPassword}/>
      
        {/* Path should be /theater/:id/dashboard in production  */}
        <PrivateRoute authed={isAuth}  path={`/theater/${userMail}/dashboard`} component={Dashboard}/> 
        
      </Switch>
    </>
  );
}

export default App;
