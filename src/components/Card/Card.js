import React from 'react';
import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'


//Functional component
const CardItem = ({image, title, price, id})=> {
    
    return (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <div className='card-item'>
            <div>
                <img src={`/${image}`}/>
            </div>
            <p>{title}</p>
            <span>$ {price}</span>      
            <span></span>   
            <div>
            <Button variant='contained' className="detail-btn" style={{backgroundColor: '#71996a', borderRadius: '20px'}}>
                <Link to={`/product/${id}`} style={{textDecoration: 'none', color: '#eddea3'}}>Detalle</Link>
            </Button>
            </div>
        </div>
        </CardContent>
    </Card>
    );
}

export default CardItem;