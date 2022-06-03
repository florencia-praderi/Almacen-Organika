import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'



//Functional component
const CardItem = ({image, title, price, id})=> {
    console.log("product id : ", id)

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
            <Button variant='contained' color='primary'>Añadir</Button><br></br>
            <Button variant='outlined' color='primary'>
                <Link to={`/product/${id}`} className="detail-btn">Detalle</Link>
            </Button>
        </div>
        </CardContent>
    </Card>
    );
}

export default CardItem;