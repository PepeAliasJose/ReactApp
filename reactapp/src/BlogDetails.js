import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();

    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {

        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })

    }
   

    return (
        <div className="blog-details">
            <h1>Blog details - { id }</h1>

            {error && <div> Error: { error } </div>}
            {isPending && <div> Cargando... </div>}
            {   //Si blog esta definido pinta el blog
                blog &&
                    <div key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p> {blog.body} </p>
                    <p style={{
                        fontSize: "60%"
                    }}> Escrito por: {blog.author} </p>
                    <button onClick={handleClick}>Borrar blog :( </button>
                </div>
            }
        </div>
    );

}

export default BlogDetails;