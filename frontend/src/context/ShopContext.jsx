import React, {createContext, useState} from "react";
import all_product from "../components/Assets/all_product"
export const ShopContext = createContext(null);




export const ShopContextProvider =(props)=>{
   
    const [count, setCount] = useState(0);
    const inc = ()=>{
        setCount(()=>(count +1))
        
    }
    const dec = ()=>{
        setCount(()=>(count -1))
        
    }
    const getDefaultCart = ()=>{
        let cart={};
        if(!cart[0]){
            for (var i=1; i<all_product.length+1; i++){
                cart[i]=0;
            }
            
            return(cart);
            
        }
        else{
            return(cart)
        }
    }
    const [cartItems, setCartItems] = useState(getDefaultCart());
  

    const addToCart = (ItemId)=>{
        setCartItems((prev)=>{
            
            
            return {...prev, [ItemId]:prev[ItemId]+1}})
        
        inc();
        
        
    }
    const removeFromCart = (ItemId)=>{
        setCartItems((prev)=>{
        
            
            return {...prev, [ItemId]  :prev[ItemId]-1}})
        
        
        dec();
        
    }

    const count_total = ()=>{
        let total =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                
                const product = all_product.find((e)=> e.id ===Number(item));
                total += product.new_price*cartItems[item];
                
            }
        }
        return(total);
    }


    const contextValue = {all_product, cartItems, setCartItems, addToCart, removeFromCart, count, inc, dec, count_total};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
