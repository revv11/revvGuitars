import React from "react";
import { useContext } from "react";
import "./Offers.css"
import band from '../Assets/a7x.jpg'
import logo from '../Assets/schecter.png'
import {Link} from "react-router-dom";
import { ChangeMenu } from "../../context/context";

const Offers = ()=>{
    const menustate= useContext(ChangeMenu);
    return(
        <div className='offers'>
          <div className='offers-left'>
          <Link to='/schecter'>
           <img onClick={()=>{menustate.setMenu("schecter")}} className='logo' src={logo}/>
           </Link>
          </div>

          
            <div className='offers-right'>

           <img className='band' src={band}/>
            </div>
           
           

        </div>
        
    )
}

export default Offers;