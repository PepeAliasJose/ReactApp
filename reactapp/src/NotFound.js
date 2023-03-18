import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Lo sentimos</h2>
            <p>Esa pagina no existe</p>
            <Link to='/'>
                Volver a la pagina principal...
            </Link>
        </div>
    );
}
 
export default NotFound;