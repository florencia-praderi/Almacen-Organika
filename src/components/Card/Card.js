import React from 'react';
import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import { useContext } from 'react';
import Loader from '../Loader/Loader';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

//Functional component
const CardItem = ({image, title, price, id})=> {
    const {addProductToCart} = useContext(CartContext)
    const notify = () => toast.success("Producto añadido");
    
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
            <Button variant='contained' className="card-item-btn" style={{backgroundColor: '#704f46'}} onClick={()=>{
                addProductToCart({image, title, price, id});
                notify()}}>
            <ToastContainer />
                Agregar al carrito
            </Button>
            </div><span></span>   
            <div>
            <Button variant='contained' className="detail-btn" style={{backgroundColor: '#71996a'}}>
                <Link to={`/product/${id}`} style={{textDecoration: 'none', color: '#eddea3'}}>Detalle</Link>
            </Button>
            </div>
        </div>
        </CardContent>
    </Card>
    );
}

export default CardItem;