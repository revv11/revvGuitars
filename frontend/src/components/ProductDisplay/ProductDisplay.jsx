import React, {useContext} from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";


const ProductDisplay = (props)=>{
    const {product}= props;
    const {addToCart}= useContext(ShopContext);
    const {cartItems} = useContext(ShopContext);
    console.log(cartItems);
    
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
            <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} />
                </div>
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
               

            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_dull_icon}/>
                    <p>(112)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    <p>{product.name}</p>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

            </div>

        </div>
    )
}

export default ProductDisplay;