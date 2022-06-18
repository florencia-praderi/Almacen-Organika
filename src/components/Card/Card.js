import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import { useContext } from 'react';
import Loader from '../Loader/Loader';

//Functional component
const CardItem = ({image, title, price, id})=> {
    const {addProductToCart} = useContext(CartContext)
    
    return (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <div className='card-item'>
            <div>
                <img src={`./images/${image}`}/>
            </div>
            <p>{title}</p>
            <span>$ {price}</span>      
            <div>          
            <Button variant='contained' className="card-item-btn" style={{backgroundColor: '#704f46'}} onClick={()=>addProductToCart({image, title, price, id})}>
                Agregar al carrito
            </Button>
            </div><span></span>   
            <div>
            <Button variant='contained' className="detail-btn" style={{backgroundColor: '#71996a'}}><Link to={`/product/${id}`} style={{textDecoration: 'none', color: '#eddea3'}}>Detalle</Link></Button>
            </div>
        </div>
        </CardContent>
    </Card>
    );
}

export default CardItem;