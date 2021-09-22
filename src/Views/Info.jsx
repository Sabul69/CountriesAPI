import { useEffect } from "react";
import Header from "../components/Header";
import { useParams} from "react-router";
import { useState } from "react/cjs/react.development";

import "../styles/info.css"
import Loader from "../components/Loader";

const Info = () => {
    const {key,capital} = useParams();
    const [singleData, setSingleData]=useState(null);
    const [clima, setclima] = useState(null);
    const [loader1, setloader1] = useState(true);
    const ApiKey = "b977ff908163121d3db732e620d2012e";


useEffect(() => {
    const handleFetch = async () =>{
        try {
            const url = `https://restcountries.com/v2/alpha/${key}`
            const response = await fetch(url);
            const result = await response.json();
            setSingleData(result);
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleWeather = async () =>{
        try {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${ApiKey}`
            const response = await fetch(url);
            const result = await response.json();
            setclima(result);
            setloader1(false);
        } catch (error) {
            console.log(error);
            setloader1(false);
        }
    }
    handleFetch();
    handleWeather();
}, [key,capital])
    return(
        singleData && (
            <>
            <Header/>
            <div className= "container">
            { loader1?(
                <Loader/>
            )
                 :(
                     <>
                <div className="card">
                    <div className="info">
                    <img src={singleData.flags[0]} alt={singleData.flag}/>
                    <p>Pais: <span>{singleData.name}</span></p>
                    <p>Capital: <span>{singleData.capital}</span></p>
                    <p>Region: <span>{singleData.region}</span></p>
                    <p>Sub-region: <span>{singleData.subregion}</span></p>
                    <p>Poblacion: <span>{singleData.population}</span></p>
                    <p>Nombre nativo: <span>{singleData.nativeName}</span></p>
                    </div>
                    <div className="weather">
                    <img src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`} alt="Holis"/>  
                    <p>Temperatura: <span>{((clima.main.temp)-273.15).toFixed(2)}</span></p>
                    <p>Sensacion: <span>{((clima.main.feels_like)-273.15).toFixed(2)}</span></p>
                    <p>Max: <span>{((clima.main.temp_max)-273.15).toFixed(2)}</span></p>
                    <p>Min: <span>{((clima.main.temp_min)-273.15).toFixed(2)}</span></p>
                </div>
                </div>
                </>
                 )}
            </div>
            </>
        )
    );
};

export default Info;