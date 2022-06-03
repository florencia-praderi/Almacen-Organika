import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import ShoppingCartIcon from '../CartWidget/CartWidget';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

//UpperCamelCase
const NavBar = ()=>{
    return (
            <AppBar position="static">
                <Toolbar className="navbar">
                    <div className="container-logo">
                    <img src="./Logo-Almacen.png"/>
                    </div>
                    <div>
                        <Button color='secondary'>
                            <Link to={'/'} className='btn-navbar'>Home</Link></Button>
                        <Button className='btn-navbar' color='secondary'>Shop</Button>
                        <Button color='inherit'>
                            <Link to={'/contacto'} className='btn-navbar'>Contacto</Link></Button>     
                        <Button className='btn-navbar' color='secondary'>Login</Button>                                     
                    </div>
                    <Typography sx={{ flexGrow: 2}}>
                        <Button className='btn-cart' color='secondary'>
                            <ShoppingCartIcon />
                        </Button>                        
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default NavBar