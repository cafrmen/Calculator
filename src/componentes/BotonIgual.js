import React from 'react';
import '../hojas-de-estilo/BotonIgual.css';

function BotonIgual(props) {
    return (
        <div className='boton-igual' onClick={() => props.manejarClic(props.children)}>
        {props.children}
    </div>
    )
}

export default BotonIgual;