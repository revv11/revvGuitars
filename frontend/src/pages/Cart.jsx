import React from "react";
import CartItem from '../components/CartItem/CartItem'
import Total from '../components/Total/Total'

const Cart = ()=>{
    return(
        <div>
            <CartItem/>
            <Total/>
        </div>
    )
}

export default Cart;