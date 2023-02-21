import { useState } from 'react';

//VARIABLES GLOBALES

//TIEMPO DE CUENTA ATRAS
var min = 2;
var sec = 0;



const Reloj = () => {


    //useState() para variables que cambien dinamicamente
    const [time,setTime] = useState(
        `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`
    );

    const [isstart,setisstart] = useState(false)           //NO INICIADO
    const [intervalId, setIntervalId] = useState(null);    //INTERVALO 0



    //FUNCIONAMIENTO BASICO DEL RELOJ
    const mainReloj = () => {
        if(min > 0 || sec > 0){
            if(sec === 0){
                
                sec = 59;
                min--;

            }else{
                sec--;
            }
            setTime(`${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`);  
        }else{
            clearInterval(intervalId);
        }
    }

    //INICIO DEL RELOJ Y PAUSA
    const inicio = () => {
        var button = document.getElementById("startButton");
        if(!isstart && intervalId == null){
            //SI NO ESTA INICIADO Y EL INTERVALO ES 0
            setIntervalId(setInterval(mainReloj,1000));
            button.innerHTML = "STOP";
            setisstart(true);

        }else{
            if(!isstart){//Si no esta iniciado continua la ejecucion
                continua();
            }else{//Si lo esta pausa   
                pausa();
            }
        }
    };

    const pausa = () => { 
        var button = document.getElementById("startButton");     
        button.innerHTML = "START";
        //PAUSA INTERVALO
        clearInterval(intervalId);
        setisstart(false);
    }

    const continua = () => {
        var button = document.getElementById("startButton");
        button.innerHTML = "STOP";
        //INICIA INTERVALO
        setIntervalId(setInterval(mainReloj,1000));
        setisstart(true);
    }

    const reset = () => {
        min = 2;
        sec = 0;
        setTime(`${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`);  
    }

    //Devuelve el reloj
    return (  
        <div className='reloj'>
            <p>Temporizador de 2 minutos</p>
            <div className='' style={{
                fontSize: "100px",
                fontStyle: "bolder"
            }}>{time}</div>
            <div className='' >
                {/*BOTON DE INICIO Y PAUSA*/}
                <button onClick={inicio} id="startButton" style={{
                    height: "40px",
                    backgroundColor: "red",
                    borderRadius: "8px",
                    border: "0px",
                    fontSize: "30px"
                }}>START</button> 
                <br/>
                {/*BOTON DE REINICIAR*/}
                <button onClick={reset} id="resetButton" style={{
                    marginTop: "10px",
                    height: "40px",
                    backgroundColor: "orange",
                    borderRadius: "8px",
                    border: "0px",
                    fontSize: "30px"
                }}>RESET</button>
            </div>
        </div>
    );
}
 
export default Reloj;