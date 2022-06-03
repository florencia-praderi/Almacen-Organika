import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardList from '../components/CardList/CardList'
import productos from '../utils/products'

const Catalog = ()=>{
    const [products, setProducts] = useState([])
    const {category} = useParams()

    useEffect (()=>{
        setProducts([])
        getProducts()
        .then ((res)=>{
            filterByCat(res)
        })
    }, [category])

    const getProducts = ()=>{
        return new Promise ((resolve, reject)=>{
            resolve (productos)
        })
    }
    const filterByCat = (array)=>{
        return array.map((item)=>{
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