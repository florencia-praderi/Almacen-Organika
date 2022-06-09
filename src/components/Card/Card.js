import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import { useContext } from 'react';

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
            <Button variant='contained' className="card-item-btn" onClick={()=>addProductToCart({image, title, price, id})}>
                Agregar al carrito
            </Button>
            </div><span></span>   
            <div>
            <Button variant='contained' className="detail-btn"><Link to={`/product/${id}`} className="detail-btn">Detalle</Link></Button>
            </div>
        </div>
        </CardContent>
    </Card>
    );
}

export default CardItem;