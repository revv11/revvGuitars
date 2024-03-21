import React from "react";
import Hero from "../components/Hero/Hero"
import Popular from "../components/Popular/Popular"
import Offers from "../components/Offers/Offers"
import NewsLetter from '../components/NewsLetter/NewsLetter'
const Home = ()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewsLetter/>
        </div>
    )
}

export default Home;