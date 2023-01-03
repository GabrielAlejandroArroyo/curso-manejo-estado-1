import React from 'react';

function UseState({ name }) {
    // Creacion de estado
    //const [state, setState] = React.useState();
    const [error, setError] = React.useState(false);
    return (
        <div>
            <h2>Eliminar {name}</h2>

            <p>Por favor, escribe el codigo de seguridad para comprobar </p>

            {error && (
                <p>Error: El codigo es incorrecto</p>
            )}

            <input placeholder='Codigo de seguridad' />
            <button
                onClick={() => setError(!error)}
            >Comprobar</button>
        </div>
    );
}

export { UseState };