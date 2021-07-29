import React, { useState } from 'react';
import Fakedata from '../../Fakedata.json';
import Food from '../Food/Food';

const Lunch = () => {
    const first6=Fakedata.slice(6,12);
    const [food ,setFood]=useState(first6);
    
    return (
        <div>
            
            
             
            {
                food.map(food=><Food key={food.id}food={food}></Food>)
            }
             

        </div>
    );
};

export default Lunch;