import { useState }  from 'react';

var mg = 30;

const Contador = () => {

    const [likes,setLikes] = useState(mg);

    function sumaLike(){
        setLikes(likes+1);
    }

    return (
        <div className='contador'>
            <p>Likes: {likes}</p>
            <button onClick={sumaLike}>Suma</button>
        </div>
    );
}
 
export default Contador;