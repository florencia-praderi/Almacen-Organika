import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () =>{
    return (
        <>
        <button className='banner-header'>¡Con tarjetas Santander tenes hasta un 15% de descuento! *Hacé click acá para conocer más detalles</button>
        <div className='home-container'>
            <h2>Alimentos naturales</h2>
            <h1>Encontrá tus productos saludables preferidos</h1>
            <Button>
                <Link to={'/shop'} className='home-btn' style={{textDecoration:'none', textTransform: 'uppercase'}}>Comprar</Link>
            </Button>
            <div style={{display: 'flex', justifyContent: 'right'}}>
            <Button>
                <Link to={'/contact'} className='help-btn' style={{textDecoration:'none', textTransform: 'uppercase'}}>Necesitas ayuda?</Link>
            </Button>
            </div>
        </div>
        <div className='home-container2'>
            <div className='home-container2-img'>
                <img src='/images/home2.png'/>
            </div>
            <div style={{display: 'flex', flexDirection:'column', textAlign: 'left', justifyContent: 'center'}}>
            <h2 >Almacen Organika</h2>
            <p>Nuestra convicción sobre el poder de la alimentación en nuestra salud física y mental nos ha hecho formar parte del grupo de empresas líderes del mercado en alimentación saludable en el Uruguay. 
                Desde el año 2005 nos dedicamos con vocación y conocimiento a la venta de alimentos naturales y afines. 
                En el año 2012 incursionamos en el área de elaboración de alimentos, un menú diario vegetariano y saludable, postres, veganos y sin azúcar. Abriendo un nuevo camino para nuestra empresa lleno de proyectos y desafios.
            </p>
            </div>
        </div>
        </>
        )
}

export default Home

