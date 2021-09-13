import { Link } from "react-router-dom";
import "../styles/error.css"

const NotFound = () => {
    return(
        <div className="error">
        <h2>Error 404</h2>
        <h3>Not Found</h3>
        <Link to="/">Back</Link>
        </div>
    );
};

export default NotFound;