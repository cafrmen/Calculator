import { useState } from 'react';
import { evaluate } from 'mathjs'; // libreria para funciones matemáticas
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import BotonIgual from './componentes/BotonIgual';
import './App.css';
import './font/digital.ttf';

function App() {

  const [input, setInput] =  useState('');

  const agregarInput = val => {
    return input === 0 && val === 0 ?
      setInput(0) :
      setInput(input + val);
  };

  const calcularResultado = () => {
    return input ?
      setInput(evaluate(input)) :
      alert('Please add some values to calculate');
  }; // evaluate es función de mathjs

  return (
    <div className="App">

     <div className='contenedor-calculadora'>

      <Pantalla input={input}/>

      <h3>Mathjs Formula Logic Calculator</h3>
      <hr />

      <div className='fila'>
        <BotonClear manejarClear={() => setInput('')}>
          AC
        </BotonClear>
        <Boton manejarClic={agregarInput}>+</Boton>
      </div>

      <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
      </div>

      <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
      </div>

      <div className='fila'>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
      </div>

      <div className='fila'>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <BotonIgual manejarClic={calcularResultado}>=</BotonIgual>
      </div>
     </div>
    </div>
  );
}

export default App;