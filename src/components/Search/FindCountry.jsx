import "../../styles/FindCountry.css"
const FindCountry = ({setCountry, handleSearchCountry}) =>{
    return(
        <div className="find">
            <input type="text" placeholder="Introduce el nombre del pais" onChange= { e => setCountry(e.target.value)}/>
            <button onClick= {handleSearchCountry}>Go</button>
        </div>
    );
};

export default FindCountry;