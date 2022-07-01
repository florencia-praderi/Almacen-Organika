import { createContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const CartContext = createContext()

const CartProvider = ({children})=>{
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product, cantidad) =>{
        let isInCart = cartListItems.find (cartItem=> cartItem.id === product.id)
        if (!isInCart){
            console.log("se agrego el producto:", product)
            setTotalPrice(totalPrice +  product.price*product.cantidad)
            return setCartListItems(cartListItems=>[...cartListItems, product])
        }
        else {
            isInCart.cantidad += product.cantidad
            setCartListItems(cartListItems)
        }
    }

    const deleteProduct = (product) => {
        setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== product.id) )
        setTotalPrice(totalPrice - product.price*product.cantidad)
        console.log("producto eliminado", product)
    }

    const cleanCartProducts = ()=>{
        setTotalPrice(0)
        setCartListItems([])
    }

    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        cleanCartProducts,
        deleteProduct
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext
export {CartProvider}