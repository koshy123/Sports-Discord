import React from "react";
import { Link } from "react-router-dom";




function Nav (){
   
        return(
            <header className = "nav-header">
                <Link className="nav-titles" to="/">Home</Link>
                <Link className="nav-titles"  to="/about">About</Link>
               </header>
        )
   
}

export default Nav;