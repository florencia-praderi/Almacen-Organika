import CardItem from '../Card/Card'
import { Grid } from '@mui/material'

const CardList = ({title})=>{
    return(
        //Especias
        <>
        <Grid container>
            <Grid item md={3}>
                <CardItem title={"Adobo con Ajo 50g"} price={30} image={"adoboconajo.png"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Aji Molido 50g"} price={35} image={"ajomolido.png"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Ajo y Perejil 50g"} price={34} image={"ajoyperejil.png"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Cebolla Roja Triturada 25g"} price={36} image={"cebolla.png"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Ciboulette 25g"} price={72} image={"ciboulette.png"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Curry 7 mares 25g"} price={46} image={"curry.png"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Hinojo 50g"} price={45} image={"hinojo.png"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Mostaza en polvo 50g"} price={115} image={"mostaza.png"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"5 Pimientas 25g"} price={38} image={"pimientas.png"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Pimienta Cayena Molida 50g"} price={76} image={"pimientaroja.png"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Salvia 25g"} price={36} image={"salvia.png"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Tandoori 25g"} price={48} image={"tandoori.png"}/>
            </Grid>
        </Grid>
    </>
    )
}

export default CardList