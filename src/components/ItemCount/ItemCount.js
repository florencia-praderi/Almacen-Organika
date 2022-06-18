import '../Card/Card'
import { Button } from "@mui/material";


const ItemCount = ({cantidad, setCantidad, setShowButton})=>{


    const addProduct = ()=>{
        setCantidad(cantidad + 1)
    }   
    const subProduct = ()=>{
        setCantidad(cantidad - 1)
    }
    
    return(
        <>
        <div className='count-item-align'>
            <Button onClick={subProduct} disabled={cantidad==0}>-</Button>
            <p>{cantidad}</p>
            <Button onClick={addProduct}>+</Button>
                    <Button variant='contained' style={{backgroundColor: '#704f46'}} onClick={()=>setShowButton(true)}>Agregar producto</Button>
        </div>
        </>
    )
}

export default ItemCount