import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    
    //function que filtra el diccionario y elimina el que tenga la id que se le manda
    //const handleDelete = (id) =>{     
    //    const newBlog = blogs.filter((blog) => blog.id !== id);
    //    setBlogs(newBlog);
    //}
   
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            
            {/* Codigo js centre {} en el que podemos meter variables */}
            {error && <div> Error: {error} </div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs}  title={"Lista de blogs"} />}

        </div>
     );

     //{/*Funcion como props*/}
     //<BlogList blogs={blogs}  title={"Lista de blogs"} handleDelete={handleDelete}/>

     //{/*ARROW FUNCTION que devuelve true o false para el filtro*/}
     //<BlogList blogs={blogs.filter((blog) => blog.author === 'yoshi') }  title={"Lista filtrada"}/>
}
 
export default Home;