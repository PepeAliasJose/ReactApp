import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {/*Map un diccionario*/}
            {/*La funcion map recorre el diccionario dandole un nombre a cada objeto de este donde poder sacar sus propiedades*/}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >
                    {/* Para poner variables hay que poner la comilla esta `` no '' */}
                    <Link to={`/details/${blog.id}`} > 
                        <h2>{blog.title}</h2>
                        {/* <p> {blog.body} </p> */}
                        <p style={{
                            fontSize: "60%"
                        }}> Escrito por: {blog.author} </p>
                    </Link>
                    {/* <button onClick={() => sendToDetails(blog.id)}>Ver blog</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;