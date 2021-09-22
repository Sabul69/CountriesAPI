import { useState } from "react/cjs/react.development";
import Header from "../components/Header";
import FindCountry from "../components/Search/FindCountry";
import NotFound from "./NotFound"
import Form from "../components/Home/Form";
import "../styles/Search.css"



const Search = () => {
    const [country, setCountry] = useState(null);
    const [data, setData] = useState(null);    
     const handleSearchCountry = async () => {
         const url = `https://restcountries.eu/rest/v2/name/${country}`
         try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result[0]);
            console.log(data);
            
         } catch (er) {
             console.log(er);
         }
     }
    return(
        <>
        <Header/>
        <div className = "buscar">
        <FindCountry
        setCountry={setCountry}
        handleSearchCountry = {handleSearchCountry}
        />
        {data === undefined ? (
            <NotFound/>
        ) : (
            data && (
                <Form
                name = {data.name}
                flag = {data.flag}
                id = {data.alpha3Code}
                capital = {data.capital}
                />
            )
        )}
        </div>
        </>
    );
};

export default Search;