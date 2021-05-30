import React from "react";
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Account from "./pages/Account/Account";
import Reservations from "./pages/Reservations/Reservations";
import Favorites from "./pages/Favorites/Favorites";
import { PaperFormLogin, PaperFormRegister } from "./pages/Login/Paper";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import Dashboard from "./pages/DashboardTheater/Dashboard";
import PrivateRoute from "./pages/Routes/PrivateRoute";
import { useSelector } from "react-redux";
import MoviePage from "./pages/MoviePage/MoviePage";

function App() {
  //Use isAuth for the global authentication state (or Redux)
  const isAuth = useSelector((state) => state.root.isAuth);
  const userMail = useSelector((state) => state.root.user.email);
  const role = useSelector((state) => state.root.user.role);
  const location = useSelector((state) => state.root.location);

  //******************************************************** */
  const history = useHistory();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation isAuth={isAuth} location={location} />
      </ThemeProvider>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={PaperFormRegister} />
        <Route path="/login" component={PaperFormLogin} />
        <Route path="/my-account" component={Account} />
        <Route path="/my-reservations" component={Reservations} />
        <Route path="/my-favorites" component={Favorites} />
        <Route path={`/Movie/:id`} component={MoviePage} />

        {/* Path should be /theater/:id/dashboard in production  */}
        <PrivateRoute
          authed={isAuth}
          path={`/theater/${userMail}/dashboard`}
          component={Dashboard}
        />
      </Switch>
    </>
  );
}

export default App;
