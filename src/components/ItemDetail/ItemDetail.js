import { Button } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({data}) => {

    const [cantidad, setCantidad] = useState (1)
    const [showButton, setShowButton] = useState (false)

    const addProductToCart = () =>{
        console.log("Producto agregado al carro: ", data)
        console.log("Cantidad" , cantidad)

    }

    return (
        <>
        <div className='item-detail'>
        <div>
            <img src={`../images/${data.image}`}/>
        </div>
        <h2>{data.title}</h2>
        <span>$ {data.price}</span>      
        <p> {data.description}</p>      
        <div className='count-item'>          
        {!showButton ? <ItemCount
            cantidad={cantidad} 
            setShowButton={setShowButton}
            setCantidad={setCantidad}/>:
            <Button variant='outlined' color='primary'><Link to={'/cart'}>Finalizar compra</Link></Button>}
        </div> 
        <div>
        <Button variant='contained' color='primary' onClick={addProductToCart()}>Seguir comprando</Button>  
        </div>
        </div>  
        </>
    )
}

export default ItemDetail