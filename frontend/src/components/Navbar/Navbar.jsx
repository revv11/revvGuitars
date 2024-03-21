import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ChangeMenu } from '../../context/context';
import { ShopContext } from '../../context/ShopContext';

const Navbar = ()=>{
  const menustate = useContext(ChangeMenu)
  const {count}= useContext(ShopContext)

    return(
    <div className="navbar">
       <div className="nav-logo">
        <img src={logo} alt=""/>
        <p>reVv</p>
       </div>
       <ul className= "nav-menu">
         <li onClick={()=>{menustate.setMenu("home")}}> <Link style={{textDecoration: 'none', color:'black'}} to="/">HOME</Link> {menustate.menu==="home"&&<hr/>}</li>
         <li onClick={()=>{menustate.setMenu("schecter")}}><Link style={{textDecoration: 'none', color:'black'}} to="/schecter">SCHECTER</Link>{menustate.menu==="schecter"&&<hr/>}</li>
         <li onClick={()=>{menustate.setMenu("fender")}}><Link style={{textDecoration: 'none', color:'black'}} to="/ibanez">IBANEZ</Link>{menustate.menu === "fender"&&<hr/>}</li>
         <li onClick={()=>{menustate.setMenu("esp")}}><Link style={{textDecoration: 'none', color:'black'}} to="/esp">ESP</Link>{menustate.menu=== "esp"&&<hr/>}</li>
       </ul>
       <div className="nav-login-cart">
        <Link to="/signup"><button onClick={()=>{menustate.setMenu("")}}>Signup</button></Link>
        <Link to="/cart"><img src={cart}/></Link>
        <div className="nav-cart-count">{count}</div>
       </div>

    </div>
    )
}
export default Navbar;