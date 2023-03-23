import React from 'react';
import '../hojas-de-estilo/Boton.css'; /* dos puntos para salir del nivel de carpetas */

function Boton(props) {
/* inNan === si valor no es un número ___ esto es para dar un true*/
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div // operador es la segunda clase en ... ? ... : ...
            className={`boton-contenedor ${esOperador(props.children) ?
                'operador' :
                ''}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;