import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import homePage from "./pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Account from "./pages/Account/Account";
import Reservations from "./pages/Reservations/Reservations";
import Favorites from "./pages/Favorites/Favorites";

import {PaperFormLogin,PaperFormRegister} from "./pages/Login/Paper"
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import MoviePage from "./pages/DashboardTheater/AddMovie";
import Dashboard from './pages/DashboardTheater/Dashboard'
import SideMenu from "./Components/DashboardComps/SideMenu";

function App() {
  //Use isAuth for the global authentication state (or Redux)
  const [isAuth, setIsAuth] = React.useState(false);
  //******************************************************** */

  const [location, setLocation] = React.useState("Tunis");
  return (
    <>

  <ThemeProvider theme={theme}>
  <Navigation
        auth={isAuth}
        setAuth={setIsAuth}
        setLocation={setLocation}
        location={location}
      />
  </ThemeProvider>
   


      <Switch>
        <Route exact path="/" component={homePage} />
        <Route path="/register" component={PaperFormRegister} />
        <Route path="/login" component={PaperFormLogin} />
        <Route path="/my-account" component={Account} />
        <Route path="/my-reservations" component={Reservations} />
        <Route path="/my-favorites" component={Favorites} />
        <Route path="/Theater/CreateMovie" component={MoviePage} />
        {/* Path should be /theater/:id/dashboard in production  */}
        <Route path='/Theater/Dashboard' component={Dashboard}/> 
        <Route path='/test' component ={Dashboard}/>
      </Switch>
    </>
  );
}

export default App;
