import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    //function que ejecuta el componente
    const handleDelete = (id) =>{
        
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);

    }
    

    return ( 
        <div className="home">
            
            <BlogList blogs={blogs}  title={"Lista de blogs"} handleDelete={handleDelete}/>

        </div>
     );

     //{/*Props*/}
     //<BlogList blogs={blogs}  title={"Lista de blogs"} handleDelete={handleDelete}/>
     //{/*ARROW FUNCTION que devuelve true o false para el filtro*/}
     //<BlogList blogs={blogs.filter((blog) => blog.author === 'yoshi') }  title={"Lista filtrada"}/>
}
 
export default Home;