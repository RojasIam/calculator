
import './App.css';
import Boton from "./componentes/Boton.js"
import logoAndres from "./imagenes/logo.png";
import Pantalla from "./componentes/Pantalla.js";
import BotonClear from "./componentes/botonClear.js";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [ input, setInput ] = useState ("");

  const agregarInput = val => {

    setInput (input + val);

  };

  const calcularSuma = () => {
  if(input){
    setInput(evaluate(input));
  } 
  else{
    alert("OPA! ingresa un numero")
  }
    

  };

  return (
    <div className="App">
     
          <div className='logo-andres-contenedor'>
            <img 
              src={logoAndres}
              className="logo-andres"
              alt='logo de andres' />
          </div>
          <div className='contenedor-calculadora'>
              <Pantalla input = {input} />
              <div className='fila'>
                <Boton manejarClic={agregarInput}>1</Boton>
                <Boton manejarClic={agregarInput}>2</Boton>
                <Boton manejarClic={agregarInput}>3</Boton>
                <Boton manejarClic={agregarInput}>+</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClic={agregarInput}>4</Boton>
                <Boton manejarClic={agregarInput}>5</Boton>
                <Boton manejarClic={agregarInput}>6</Boton>
                <Boton manejarClic={agregarInput}>-</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClic={agregarInput}>7</Boton>
                <Boton manejarClic={agregarInput}>8</Boton>
                <Boton manejarClic={agregarInput}>9</Boton>
                <Boton manejarClic={agregarInput}>*</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClic={calcularSuma}>=</Boton>
                <Boton manejarClic={agregarInput}>0</Boton>
                <Boton manejarClic={agregarInput}>.</Boton>
                <Boton manejarClic={agregarInput}>/</Boton>
              </div>
              <div className='fila'>
                  <BotonClear manejarClear={()=> setInput("")}>
                  clear
                  </BotonClear>
              </div>
                
          </div>
      </div>
   
  );
}

export default App;
