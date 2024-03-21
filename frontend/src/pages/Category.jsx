import React, {useContext} from "react";
import './CSS/Category.css'
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item/Item";
import dropdown_icon from "../components/Assets/dropdown_icon.png"


const Category = (props)=>{
    const {all_product} = useContext(ShopContext)
    
    return(
        <div className="shop-category">
        <img className="banner" src={props.banner}/>
        <div className="shopcategory-indexSort">
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
                Sort by <img src={dropdown_icon}/>
            </div>
        </div>
        <div className="shopcategory-products">
        {all_product.map((item,i)=>{
            if(props.brand===item.category){

                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
                return null
            }


                })}
        </div>
            
        </div>
    )
}

export default Category;