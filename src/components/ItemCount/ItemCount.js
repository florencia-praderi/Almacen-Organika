import '../Card/Card'
import { useState } from "react";
import { Button } from "@mui/material";


const ItemCount = ()=>{
    const [count, setCount] = useState(0)
    const addCount = ()=>{
        setCount(count + 1)
    }   
    const subCount = ()=>{
        setCount(count - 1)
    }
    
    return(
        <div className='count-item-align'>
            <Button onClick={subCount} disabled={count==0}>-</Button>
            <p>{count}</p>
            <Button onClick={addCount}>+</Button>
        </div>
    )
}

export default ItemCount