const BlogList = ({blogs,title,handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {/*Map un diccionario*/}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >
                <h2>{blog.title}</h2>
                <p> {blog.body} </p>
                <p style={{
                    fontSize: "60%"
                }}> Escrito por: {blog.author} </p>
                <button onClick={() => handleDelete(blog.id)}>Eliminar blog</button>
            </div>
            ))}
        </div>
    );
}
 
export default BlogList;