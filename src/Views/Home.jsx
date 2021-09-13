import React from "react";

//hooks
import useFetch from "../hooks/useFetch";
//Styles
import "../styles/Home.css"
//Componentes
import Form from "../components/Home/Form";
import Header from "../components/Header";
// import { map } from "async";

function Home() {
  const {data} = useFetch("https://restcountries.eu/rest/v2/all")

  return(
    <>
    <Header/>
    <div className="mainDiv">
    {data.map(numero =>(
    <Form
    name = {numero.name}
    flag = {numero.flag}
    Key = {numero.alpha3Code}
    />
    ))}
    </div>
    </>
  );
};

export default Home;
