import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardList from '../components/CardList/CardList'
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../utils/firebaseConfig'

const Catalog = ()=>{
    const [products, setProducts] = useState([])
    const {category} = useParams()

    useEffect (()=>{
        setProducts([])
        getProducts()
        .then ((productos)=>{
            category ? filterByCategory (productos, category) : setProducts(productos)
        })
    }, [category])

    const getProducts = async ()=>{
        const productSnapshot = await getDocs(collection(db, "productos"));
        const catalog = productSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return catalog
    }

    const filterByCategory = (array)=>{
        return array.map((item)=>{
            if (item.category == category){
                return setProducts(products => [...products, item])
            }
        })
    }

    return (
        <div className='general-container'>
            <div className='title'>
            <CardList title={'Catálogo de productos'} products={products}/>
            </div>
        </div>
    )
}
export default Catalog