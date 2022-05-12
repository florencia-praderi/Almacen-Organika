import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

//UpperCamelCase
const NavBar = ()=>{
    return (
            <AppBar position="static">
                <Toolbar className="navbar">
                    <div className="container-logo">
                    <img src="./LogoAlmacen.png"/>
                    </div>
                    <div>
                        <button className="btn">Home</button>
                        <button className="btn">Shop</button>
                        <button className="btn">Contacto</button>                        
                    </div>
                    <Button>Login</Button>
                </Toolbar>
            </AppBar>
    )
}
export default NavBar