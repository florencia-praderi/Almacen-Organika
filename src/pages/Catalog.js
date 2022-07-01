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
            category ? filterFirebase() : setProducts(productos)
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

    //const filterByCat = (array)=>{
    //    return array.find((item)=>{
    //        if (item.category == category){
    //            return setProducts(products => [...products, item])
    //        }
    //    })
    //}

    const filterFirebase = async () => {
        const productRef = collection(db, 'productos')
        const queryResult = query(productRef, where("category", "==", category));
        const querySnapshot = await getDocs(queryResult);
        const catalog = querySnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return setProducts(catalog)
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