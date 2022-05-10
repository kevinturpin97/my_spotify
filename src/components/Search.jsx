import React from "react";
import HeaderLeft from "./Home/HeaderLeft";
import Lecteur from "./Home/Lecteur";
import HomeSearch from "./Search/HomeSearch";

function Search() 
{
    return (
        <div>
            <HeaderLeft />
            <HomeSearch />
            <Lecteur />
        </div>
    );
};

export default Search;