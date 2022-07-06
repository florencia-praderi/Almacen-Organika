import * as React from 'react';
import { useContext, useState } from "react"
import { Container, Button, Alert, AlertTitle } from "@mui/material"
import { Delete } from "@mui/icons-material"
import CartContext from "../components/context/CartContext"
import { Link } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Modal from '../components/Modal/Modal'
import { addDoc, collection } from 'firebase/firestore';
import db from '../utils/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartListItems, totalPrice, cleanCartProducts, deleteProduct } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({
        name: '',
        mail: '',
        phone: '',
        adress: ''
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map((item)=>{
            return {
                id: item.id,
                title: item.title,
                price: item.price
            }
        }),
        total: totalPrice
    })

    const [success, setSuccess] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    //DRY
    const handleChange = (e)=>{
        setFormValue({...formValue, [e.target.name]: e.target.value })
    }
    
    const confirmOrder = ()=>{
        if (totalPrice == 0){
            console.log("No hay productos en el carrito")
            finishOrder()
        }
        else {
            setShowModal(true)
        }
    }

    const finishOrder = ()=>{
        navigate ('/')
    }

    const saveData = async (newOrder)=>{
        const orderFirebase = collection (db, "ordenes")
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("orden generada", orderDoc)
        setSuccess(orderDoc.id)
        cleanCartProducts()
    }

    return(
        <Container className='container-general'> 
        <h2 className="title">Checkout: </h2>
        <div className='cart-section'>
            <div className='col-cart-table__head'>
                <h2>Producto</h2>
                <h2>Descripcion</h2>
                <h2>Precio Unitario</h2>
                <h2>Cantidad</h2>
                <h2>Quitar</h2>
            </div>
            {cartListItems.map( (item) => {
                const {id, title, image, price, cantidad} = item
                return(
                    <div className='cart-table__content' key={id}>
                        <div>
                            <img src={`/${image}`} />
                        </div>
                        <div className='cart-table__content-title'>
                            <p>{title}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <p>$ {price}</p>
                        </div>
                        <div className='cart-table__content-quantity'>
                            <p>{cantidad}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <button className='btn-delete' onClick={()=>deleteProduct(item)}>
                                <Delete />
                            </button>
                        </div>
                    </div>
                )
            })}
            <div className='cart-footer'>
                <Button><Link to={'/products'} className='btn-custom' style={{textDecoration: 'none'}}>Continuar comprando</Link></Button>
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__subtotal'>
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button className='btn-custom' onClick={() => {confirmOrder()}} style={{marginBottom: '3px'}}>Finalizar Compra</Button>
                </div>
            </div>
        </div>
        <Modal title={ success? "Compra realizada con éxito!" : "Completa tus datos"} open={showModal} handleClose={() => setShowModal(false)}>
            {success ? (
                <div>
                    <Alert severity="success">
                        <AlertTitle><strong>Compra existosa!</strong></AlertTitle>
                        Número de orden: <strong>{success}</strong>
                    <button onClick={finishOrder} className='btn-custom'>Aceptar</button>                        
                    </Alert>
                </div>
            ):(
                <form className="contact_form" onSubmit={handleSubmit}>
            <TextField id="outlined-basic" name="name" value={formValue.name} label="Nombre y apellido: " variant="outlined" onChange={handleChange}/>
            <TextField id="outlined-basic" name="mail" value={formValue.mail} label="Mail: " variant="outlined" onChange={handleChange}/>
            <TextField id="outlined-basic" name="phone" value={formValue.phone} label="Teléfono: " variant="outlined" onChange={handleChange}/>
            <TextField id="outlined-basic" name="adress" value={formValue.adress} label="Dirección de entrega: " variant="outlined" onChange={handleChange}/>
            <input type="submit" value="Enviar" />
        </form>
            )}            
        </Modal>
    </Container>
    )
}

export default Cart 