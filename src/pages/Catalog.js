import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardList from '../components/CardList/CardList'
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig'


const Catalog = ()=>{
    const [products, setProducts] = useState([])
    const {category} = useParams()

    useEffect (()=>{
        setProducts([])
        getProducts()
        .then ((productos)=>{
            category ? filterByCat(productos, category) : setProducts(productos)
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

    const filterByCat = (array)=>{
        return array.find((item)=>{
            if (item.category == category){
                return setProducts(products => [...products, item])
            }
        })
    }

    return (
        <div className='general-container'>
            <CardList title={'Catalogo de productos'} products={products}/>
        </div>
    )
}
export default Catalog