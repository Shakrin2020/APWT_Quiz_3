import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Head from './Components/Head';
import Home from './Home';
import Adds from './Components/Adds';
import Showpost from './Components/Showpost';
import Wantedpost from './Components/Wantedpost';
import Report from './Components/Report';
import Dash from './Components/Dash';
import Login from './Components/Login';
//import Foot from "./Components/Foot";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Head/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/adds">
          <Adds/>
        </Route>
        <Route exact path="/showpost">
          <Showpost/>
        </Route>
        <Route exact path="/wantedpost">
          <Wantedpost/>
        </Route>
        <Route exact path="/report">
          <Report/>
        </Route>
        <Route exact path="/dash">
          <Dash/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>   

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
