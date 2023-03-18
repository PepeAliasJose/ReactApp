import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create(){

    //recoger los datos del formulario
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAutor] = useState('mario');

    const [isPending, setIsPending] = useState(false);
    const [publicado, setpublicado] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        setTimeout(() =>{
  
            const blog = {title, body, author};
            // console.log(blog);

            fetch('http://localhost:8000/blogs',{
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('Nuevo blog agregado');
                setIsPending(false);
                setpublicado(true);
            });
            history.push('/');
        },2000)

        
    }

    return(
        <div className="create">

            {publicado && <div> Blog publicado </div>}
            {isPending && <div> Subiendo blog...</div>}
            {!isPending && !publicado &&

                <div>
                    <h2>Crear un nuevo blog</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="title">Titulo del blog:</label>
                            <input type="text" 
                                value={ title } 
                                required id='title'
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <label htmlFor="body">Contenido:</label>
                            <textarea required id='body'
                                value={ body } 
                                onChange={(e) => setBody(e.target.value)}
                                style={{
                                minHeight: '200px',
                                }}></textarea>

                            <label htmlFor="autor">Autor: </label>
                            <select
                                value={ author } 
                                onChange={(e) => setAutor(e.target.value)}
                            >
                                <option value="mario">Mario</option>
                                <option value="luigi">Luigi</option>
                                <option value="yoshi">Yoshi</option>
                            </select>

                            <button>Agregar blog</button>
                            {/* <p>{ title }</p>
                            <p>{ body }</p>
                            <p>{ autor }</p> */}
                        </form>
                </div>
            
            }

        </div>
    );

}

export default Create;