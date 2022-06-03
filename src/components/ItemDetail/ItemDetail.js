import { Button } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

const ItemDetail = ({data}) => {

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
            <ItemCount/>
        </div> 
        <div>
        <Button variant='contained' color='primary'>Añadir al carrito</Button> 
        </div>
        </div>  
        </>
    )
}

export default ItemDetail