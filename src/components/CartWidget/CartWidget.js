import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useContext } from 'react';
import CartContext from '../context/CartContext';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

const CartWidget = () =>{
    const {cartListItems, deleteProduct} = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const notify = () => toast.error("Producto eliminado");
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className='btn-navbar'>
        <ShoppingCartIcon 
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        />
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <div className='container-item-list-cart'>
                {cartListItems.length === 0 && (
                    <>
                        <p>No hay productos agregados al carrito</p>
                        <Link to="/shop">Empezar a comprar</Link>
                    </>
                )}
                {cartListItems.map( (item) => {
                    return(
                    <div className='item-cart-prod' key={item.id}>
                        <div className='cart-prod__image'>
                            <img src={`/images/${item.image}`} alt="prod carrito" />
                        </div>
                        <div className='cart-prod__info'>
                            <p>{item.title}</p>
                            <span>$ {item.price}</span>
                            <p>{item.cantidad}</p>
                        </div>
                        <div className='cart-prod__action'>
                            <button onClick={() => {
                                deleteProduct(item);
                                notify()}}>
                                <DeleteIcon />
                                <ToastContainer />
                            </button>
                        </div>
                        <div className='cart-checkout-details'>
                            <Button style={{cursor: 'pointer'}} onClick={handleClose}>
                                <Link to="/cart" style={{textDecoration: 'none', color: 'white'}}>Terminar compra</Link>
                            </Button>
                        </div>
                    </div>
                    )
                })}
            </div>
        </Menu>
    </div>
)
}

export default CartWidget