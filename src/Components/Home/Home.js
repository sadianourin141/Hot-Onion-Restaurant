import React from 'react';
import logo from '../../logo.png';
import "./Home.css";
import Button from 'react-bootstrap/Button';
import Food from '../Food/Food';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div class="header">
  <img src={logo} alt=""></img>
  <nav>
    <Link to="/home">Home </Link>
   <Link to="/login">Login </Link>
    <Link to="/order">Order</Link>
    </nav>
    <div className="style">
    
    <h1>Best food waiting for your belly</h1>
    <input text="" placeholder="search for food"></input><Button variant="primary">search</Button>

    </div>
    <nav>
    <Link to ="/Breakfast">breakfast</Link>
    <Link to ="/lunch">lunch</Link>
    <Link to ="/dinner">dinner</Link>
    </nav>
    <h2>Here is the food manu</h2>
    </div>
    );
};

export default Home;