import React from "react";
import './Hero.css';
import alexi from '../Assets/alexi.png'
import { Link } from "react-router-dom";

const Hero = ()=>{
    return(
        <div className="hero">
            <div>
                <img className="alexi" src={alexi}/>
            </div>
            <div className="hero-left">
                <h1>ESP ALEXI HEXED</h1>
                <h2>PURPLE FADE W/ PINESTRIPES</h2>
            </div>
            <div>
                <Link to="/product/13"><button className="explore">Explore</button></Link>

            </div>

        </div>
    )
}

export default Hero;