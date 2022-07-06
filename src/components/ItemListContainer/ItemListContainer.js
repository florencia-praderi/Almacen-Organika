import { useState, useEffect } from "react";
import CardList from '../CardList/CardList';
import productos from '../../utils/productsMock';
import { useParams } from "react-router-dom";
import Catalog from "../../pages/Catalog";

const ItemListContainer = ()=>{
    const [products, setProducts] = useState([])
    //const {category} = useParams()

    //const getProducts = () => {
    //    return new Promise((resolve, reject) => {
    //        setTimeout(() => {
    //            resolve(productos);
    //        }, 1000);
    //    });
    //}
    //useEffect (()=>{
    //    getProducts()
    //    .then((res) => {
            //console.log('resolved', res);
    //        setProducts(res)
    //    })
        //.catch((err) => {
            //console.log('rejected', err);
        //})
        //.finally(() => {
            //console.log('finalizado');
        //})
    //},[])
    return (
        <>
        <Catalog />
        </>
    )
}

export default ItemListContainer