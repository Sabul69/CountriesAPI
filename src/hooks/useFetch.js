import {useState, useEffect} from "react";

const useFetch = (url, setloader) => {
    //Estado del componente
    const [data, setData] = useState([]);
    //consultar api

useEffect(() => {    
    const handleFetchAPI = async() =>{
    try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setloader(false)
    } catch (error) {
        setloader(false)
        console.log(error);
    }
};
handleFetchAPI();            
}, [url,setloader]);
    return {data};
};
export default useFetch