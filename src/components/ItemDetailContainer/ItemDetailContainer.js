import { useState, useEffect } from 'react'
import productos from '../../utils/productsMock'
import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import db from '../../utils/firebaseConfig'

const ItemDetailContainer = () => {
    const { id } = useParams ()
    const [product, setProduct] = useState({})

    useEffect (()=>{
        getProduct()
        .then((prod)=>{
            setProduct(prod)
        })
        
    },[id])

    const getProduct = async()=>{
        const docRef = doc (db, "productos", id)
        const docSnaptshop = await getDoc (docRef)
        let product = docSnaptshop.data()
        product.id = docSnaptshop.id
        console.log("docSnatpshop :", docSnaptshop)
        return product
    }

    const productFilter = productos.find((product) => {
        return product.id == id
        })

    return(
        <>
        {product && <ItemDetail data={product}/>}
        </>
    )
}
export default ItemDetailContainer