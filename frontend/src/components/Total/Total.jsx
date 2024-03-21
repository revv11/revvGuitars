import React , {useContext} from "react";
import "./Total.css";
import { ShopContext } from "../../context/ShopContext";


const Total = ()=>{
    
    const {count_total}= useContext(ShopContext);
    const {count}= useContext(ShopContext);
    

    
    if(count){
        return(
            <div className="total">
            <div className="box">
                <div className="text">{`Price (${count} Item(s))`}</div>
                <div className="value">${count_total()}</div>
            </div>
            <hr/>
            <div className="box">
                <div className="text">Discount</div>
                <div className="value">$0</div>
            </div>
            <hr/>
            <div className="box">
                <div className="text">Delivery Charges</div>
                <div className="value">$0</div>
            </div>
            <hr/>
            <hr/>
            <div className="box">
                <div className="text">TOTAL</div>
                <div className="value">${count_total()}</div>
            </div>
    
            </div>
        )

    }
    
}
export default Total;