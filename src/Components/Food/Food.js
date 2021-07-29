import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
import "./Food.css";

const Food = (props) => {
  
  const {image,first_name,price,words,picture,id}=props.food;
     
     const history=useHistory();
     const handleOrder=(id)=>{
       history.push(`/order/${id}`);
       
       
     }
    return (
        <div>
            <Card className="cardstyle" style={{ width: '18rem',boxShadow: "5px 5px 10px gray" }}>
  <Card.Img variant="top" src={picture} />
  <Card.Body>
    <Card.Title>{first_name}</Card.Title>
    <Card.Text>
      {words}<br/>
      ${price}
    </Card.Text>
    <Button onClick={()=>handleOrder(id)}variant="primary">order</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Food;