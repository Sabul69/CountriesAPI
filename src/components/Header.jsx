import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";

const Header = () =>{
return(
<header className="Title">
<div>
<h1> Countries</h1>
</div>
<div className="path">
<Link to = "/">Inicio</Link>
<Link to="/search">Buscar</Link>
</div>
</header>
);
}
export default Header;