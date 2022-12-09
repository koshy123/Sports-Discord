import React from "react";
import { Link } from "react-router-dom";




function Nav (){
   
        return(
            <header className = "nav-header">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
               </header>
        )
   
}

export default Nav;