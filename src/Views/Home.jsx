import React, {useState} from "react";

//hooks
import useFetch from "../hooks/useFetch";
//Styles
import "../styles/Home.css"
//Componentes
import Form from "../components/Home/Form";
import Header from "../components/Header";
import Loader from "../components/Loader";
function Home() {
  const [loader, setloader] = useState(true)
  const {data} = useFetch("https://restcountries.com/v2/all", setloader)

  return(
    <>
    <Header/>
    <div className="mainDiv">
    { loader? 
      (
       <Loader/>
      )
      :(<>
    {data.map((numero, pos) =>(
    <Form
    name = {numero.name}
    flag = {numero.flags[0]}
    id = {numero.alpha3Code}
    key ={pos}
    capital = {numero.capital}
    />
    ))}
    </>)
    }
    </div>
    </>
  );
};

export default Home;
