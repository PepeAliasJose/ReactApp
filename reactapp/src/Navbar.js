import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The dojo blog </h1>
            <div className="links">
                <Link to="/">Home</Link> {/*Si pones el componente Link lo intercepta React 
                para inyectar contenido en el DOM antes de hacer una solicitud al servidor*/}
                <Link to="/create" style={{
                    color:'white' ,
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Nuevo blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;