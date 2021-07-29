import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router';
import fakedata from '../../Fakedata.json';
import './Order.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';


const Order = () => {
    
    const {Id}=useParams();
    const [foods,setFoods]=useState([]);
    const [count,setCount]=useState(0);
    
    const {first_name,picture,words,price,email,title,url}=foods;
    const handleIncrease=(foods)=>{
      const newCount= count+1;
      setCount(newCount);

      console.log(foods);

    }
    
    
    const handleDecrease=(foods)=>{
      const newCount= count-1;
      setCount(newCount);

      console.log(foods);

    }
   
      useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${Id}`)
        .then(res => res.json())
            .then(data => setFoods(data))
            
    }, []);
    return (
        <div>
            <Container>
            <h1>This is order {Id}</h1>
            
  <Row>
    <Col><h3>Details about{title}</h3> 
    <button onClick={()=>handleIncrease(foods)}>+</button>count:{count}<button onClick={()=>handleDecrease(foods)}>-</button><br/>
     <Button> <FontAwesomeIcon icon={ faUtensils } />  add</Button>
    </Col>
    <Col className="imagestyle"><img src={url} alt=""></img>
    
           </Col>
           <Col><Cart>{count}</Cart></Col>
           
   
  </Row>

</Container>

        </div>
    );
};

export default Order;