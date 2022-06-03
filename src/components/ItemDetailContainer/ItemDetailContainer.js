import { useState, useEffect } from 'react'
import productos from '../../utils/products'
import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const { id } = useParams ()
    const [product, setProduct] = useState({})

    useEffect (()=>{
        setProduct(productFilter)
    }, [id])
    const productFilter = productos.find( (product) => {
        return product.id == id
    })

    return(
        <>
            <ItemDetail data={product}/>
        </>
    )
}
export default ItemDetailContainer