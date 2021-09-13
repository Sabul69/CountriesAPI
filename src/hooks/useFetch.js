import {useState, useEffect} from "react";

const useFetch = url => {
    //Estado del componente
    const [data, setData] = useState([]);
    //consultar api
    const handleFetchAPI = async() =>{
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log(error);
        }
    };
useEffect(() => {handleFetchAPI();}, [url]);
    return {data};
};
export default useFetch