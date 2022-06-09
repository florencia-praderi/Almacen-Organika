import CardItem from '../Card/Card'
import { Grid } from '@mui/material'
import { useState, useEffect } from 'react'

const CardList = ({title, products})=>{

    return(
        <>
        <h2>{title}</h2>
        {console.log("state products: ", products)}
        <Grid container spacing={3}>
            {
                products.map( ({title, price, image, id, category})=>{
                    return (
                            <Grid item md={4} key={id}>
                                <CardItem title={title} price={price} image={image} id={id} category={category}/>
                            </Grid>
                    )
                })
            }
        </Grid>
    </>
    )}

    export default CardList