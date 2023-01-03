import React from 'react';

function UseState({ name }) {
    // Creacion de estado
    //const [state, setState] = React.useState();
    const [error, setError] = React.useState(true);
    const [loading, setloading] = React.useState(false);

    // if (!!loading) {
    //     setloading(false);
    // }
    React.useEffect(() => {
        console.log("Empezando el efecto");

        if (!!loading) {
            //Esperarndo
            setTimeout(() => {
                console.log("Haciendo la validacion");

                setloading(false);
                console.log("Terminando la validacion");
            }, 3000);
        }


        console.log("Terminando el efecto");

    }, [loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>

            <p>Por favor, escribe el codigo de seguridad para comprobar </p>

            {error && (
                <p>Error: El codigo es incorrecto</p>
            )}

            {loading && (
                <p>Cargando ...</p>
            )}

            <input placeholder='Codigo de seguridad' />
            <button
                //onClick={() => setError(!error)}
                onClick={() => setloading(true)}
            >Comprobar</button>
        </div>
    );
}

export { UseState };