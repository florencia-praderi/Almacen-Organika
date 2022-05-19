import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import ShoppingCartIcon from '../CartWidget/CartWidget';
import Typography from '@mui/material/Typography';

//UpperCamelCase
const NavBar = ()=>{
    return (
            <AppBar position="static">
                <Toolbar className="navbar">
                    <div className="container-logo">
                    <img src="./Logo-Almacen.png"/>
                    </div>
                    <div>
                        <Button className='btn-navbar' color='secondary'>Home</Button>
                        <Button className='btn-navbar' color='secondary'>Shop</Button>
                        <Button className='btn-navbar' color='secondary'>Contacto</Button>     
                        <Button className='btn-navbar' color='secondary'>Login</Button>                                     
                    </div>
                    <Typography sx={{ flexGrow: 2}}>
                    <div className='btn-cart' >
                        <Button color='secondary'>
                            <ShoppingCartIcon />
                        </Button>                        
                    </div>
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default NavBar