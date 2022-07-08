import '../Card/Card'
import { Button } from "@mui/material";
import { useState, useContext } from 'react';
import { Link } from "react-router-dom"
import CartContext from '../context/CartContext';


const ItemCount = ({data})=>{
    const {addProductToCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState (1)
    const [showButton, setShowButton] = useState (false)

    const addProduct = ()=>{
        setCantidad(cantidad + 1)
    }   
    const subProduct = ()=>{
        setCantidad(cantidad - 1)
    }

    const addToCart = (data)=>{
        setShowButton(true)
        let product = data
        data.cantidad = cantidad
        addProductToCart(product)
    }
    
    return(
        <>
        <div className='count-item-align'>
            <Button onClick={subProduct} disabled={cantidad==0}>-</Button>
            <p>{cantidad}</p>
            <Button onClick={addProduct}>+</Button>
        </div>     
        <div className='count-item'> 
            {!showButton ? 
            <Button variant='contained' style={{backgroundColor: '#704f46', borderRadius: '20px', color: '#eddea3'}} onClick={()=>{
                addToCart(data)}}>
                Agregar producto
            </Button>
            :
            <Button variant='outlined' style={{backgroundColor: '#704f46', borderRadius: '20px'}}>
                <Link to={'/cart'} style={{color: '#eddea3', textDecoration: 'none'}}>Finalizar compra</Link>
            </Button>
            }
        </div>  
        </>
    )
}

export default ItemCount