import { useEffect } from "react";
import Header from "../components/Header";
import { useParams} from "react-router";
import { useState } from "react/cjs/react.development";

import "../styles/info.css"

const Info = () => {
    const {key} = useParams();
    const [singleData, setSingleData]=useState(null);

const handleFetch = async () =>{
    try {
        const url = `https://restcountries.eu/rest/v2/alpha/${key}`
        const response = await fetch(url);
        const result = await response.json();
        setSingleData(result);

    } catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    handleFetch();
}, [])
console.log(singleData);
    return(
        singleData && (
            <>
            <Header/>
            <div className="card">
                <div>
                <img src={singleData.flag} alt={singleData.flag}/>
                </div>
                <div className="info">
                <p>Pais: <span>{singleData.name}</span></p>
                <p>Capital: <span>{singleData.capital}</span></p>
                <p>Region: <span>{singleData.region}</span></p>
                <p>Sub-region: <span>{singleData.subregion}</span></p>
                <p>Poblacion: <span>{singleData.population}</span></p>
                <p>Nombre nativo: <span>{singleData.nativeName}</span></p>
                </div>
            </div>
            </>
        )
    );
};

export default Info;