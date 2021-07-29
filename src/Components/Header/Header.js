

import React, { useState } from 'react';
import Fakedata from '../../Fakedata.json';
import Food from '../Food/Food';



const Header = () => {
   
     const first6=Fakedata.slice(0,6);
     const [food ,setFood]=useState(first6);
     const handleClick=()=>{
         console.log('cli');
     }
     

    return (
        <div>
            
             
            {
                food.map(food=><Food key={food.id}food={food} handleClick={handleClick}></Food>)
            }
             
        </div>
    );
};

export default Header;