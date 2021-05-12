import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router ,Route} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import {defaultTheme} from "./theme";
import configureStore from './Redux/Store/store'
import {Provider} from 'react-redux'

 const store=configureStore() ;
 console.log(store) 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
        <App />
        </Provider>
        
      </ThemeProvider>
  
      
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
