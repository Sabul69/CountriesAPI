import React from "react";
import {Link} from 'react-router-dom'

import "../../styles/Form.css";

const Form = props => {
     const{name, flag, Key} = props
    return(
        <div className="country-card">
        <img src={flag} alt = {name}/>
        <h2>{name}</h2>
        <button><Link to={`country/${Key}`}> Ver más</Link></button>
        </div>
    );
}
export default Form;