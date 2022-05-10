import React from "react";
import HeaderLeft from "./Home/HeaderLeft";
import HomePage from "./Home/HomePage";
import Lecteur from "./Home/Lecteur";
import './main.css';

function Home()
{
    return (
        <div>
            <HeaderLeft />
            <HomePage />
            <Lecteur />
        </div>
    );
}

export default Home;