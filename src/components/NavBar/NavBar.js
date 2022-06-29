import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

//UpperCamelCase
const NavBar = ()=>{

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const categories = ["Especias", "Condimentos", "Aromáticas"]


    return (
            <AppBar position="static">
                <Toolbar className="navbar">
                    <div className="container-logo">
                    <img src="./Logo-Almacen.png"/>
                    </div>
                    <div>
                        <Button color='secondary'>
                            <Link to={'/'} className='btn-navbar'>Home</Link></Button>
                        <Button                             
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            disableRipple
                            style={{ backgroundColor: 'transparent', color: '#eddea3' }} 
                            variant='text' 
                            className='btn-navbar'>Shop</Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            {categories.map( (cat) => {
                                return <MenuItem onClick={handleClose}><Link to={`/products/${cat}`} className='btn-navbar'>{cat}</Link></MenuItem>
                            })}
                        </Menu>
                        <Button color='secondary'>
                            <Link to={'/contact'} className='btn-navbar'>Find Us</Link></Button>                                     
                    </div>
                    <Typography sx={{ flexGrow: 2}}>
                        <Button className='btn-cart' >
                        <CartWidget />
                        </Button>                        
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default NavBar