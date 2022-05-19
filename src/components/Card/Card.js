import './Card.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'


//Functional component
const CardItem = ({image, title, price})=> {
    
    return (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <div className='card-item'>
            <div>
                <img src={`./images/${image}`}/>
            </div>
            <p>{title}</p>
            <span>$ {price}</span>      
            <div className='count-item'>          
                <ItemCount/>
            </div>   
            <Button variant='contained' color='primary'>Agregar</Button> 
        </div>
        </CardContent>
    </Card>
    );
}

export default CardItem;