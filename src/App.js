import React,{createContext,useState} from 'react'; 
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Order/Order';
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';
 export const UserContext =createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p> welcome,{loggedInUser.name}!</p>
    <Router>
      <Home/>
      <Switch>
        <Route path="/breakfast">
          <Header/>

        </Route>
        <Route path="/lunch">
          <Lunch/>

        </Route>
        <Route path="/dinner">
          <Dinner/>

        </Route>
        <Route path="/login">
          <Login></Login>

        </Route>
        <PrivateRoute path="/order/:Id">
          <Order/>
        </PrivateRoute>
        <Route exact path="/">
        <Header/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
//https://mocki.io/v1/b819dbbb-40fc-4835-8dde-f5b2da3178b3
