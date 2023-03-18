import { useState,useEffect } from 'react';

const useFetch = (url) => {

     // Diccionario con los blogs
     const [data,setData] = useState(null);
     const [isPending,setIsPending] = useState(true); // variable para mostrar mensaje de carga
     const [error,setError] = useState(null); //variable de error


     //useEfect se ejecuta cuando se rerenderiza algun componente
     useEffect(() => {

        //abort controller
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then((res) =>{
                if(!res.ok){
                    throw Error("No se ha podido acceder a los datos de ese recurso");
                }
                return res.json();
            })
            .then((dat) => {
                setData(dat);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if(err.name == 'AbortError'){
                    console.log('Fetch aborted');
                }else{
                    setError(err.message);
                    setIsPending(false);
                }
                
            });
        },1000);
           

        return () => abortCont.abort();
        
    }, [url]);


    return { data, isPending, error };


};

export default useFetch;