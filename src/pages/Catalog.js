import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardList from '../components/CardList/CardList'
import productos from '../utils/productsMock'

const Catalog = ()=>{
    const [products, setProducts] = useState([])
    const {category} = useParams()

    useEffect (()=>{
        getProducts()
        .then ((res)=>{
            setProducts([])
            filterByCat(res)
        })
    }, [category])

    const getProducts = ()=>{
        return new Promise ((resolve, reject)=>{
            resolve (productos)
        })
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