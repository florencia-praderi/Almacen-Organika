import './Card.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, Modal } from '@mui/material';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import ModalCarrito from '../Modal/Modal';


//Functional component
const CardItem = ({image, title, price})=> {
    const [open, setOpen] = useState(false)
    const handleClose = ()=>{
        setOpen(false)
    }

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
            <Button variant='contained' color='primary' onClick={()=> setOpen(true)}>Añadir</Button> 
        </div>
        </CardContent>
        <ModalCarrito handleClose={handleClose} open={open}>
            <p>Añadido al carrito!</p>
        </ModalCarrito>
    </Card>
    );
}

export default CardItem;