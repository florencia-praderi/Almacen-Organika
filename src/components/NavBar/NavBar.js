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
                        <Button className='btn-navbar' color='inherit'>Home</Button>
                        <Button className='btn-navbar' color='inherit'>Shop</Button>
                        <Button className='btn-navbar' color='inherit'>Contacto</Button>     
                        <Button className='btn-navbar' color='inherit'>Login</Button>                                     
                    </div>
                    <Typography sx={{ flexGrow: 2}}>
                        <Button className='btn-cart' color='inherit'>
                            <ShoppingCartIcon />
                        </Button>                        
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default NavBar