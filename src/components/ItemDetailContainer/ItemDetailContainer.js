import { useState, useEffect } from 'react'
import productos from '../../utils/productsMock'
import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const { id } = useParams ()
    const [product, setProduct] = useState({})

    useEffect (()=>{
        const productFilter = productos.find((product) => {
            return product.id === parseInt(id);
        })
        setProduct(productFilter)
    },[id])

    return(
        <>
        {product && <ItemDetail data={product}/>}
        </>
    )
}
export default ItemDetailContainer