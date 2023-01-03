import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    // Creacion de estado
    //const [state, setState] = React.useState();
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    console.log(value);

    // if (!!loading) {
    //     setloading(false);
    // }
    React.useEffect(() => {
        console.log("Empezando el efecto");

        if (!!loading) {
            //Esperarndo
            setTimeout(() => {
                console.log("Haciendo la validacion");

                if (value === SECURITY_CODE) {
                    setLoading(false)
                    //setError(false);
                } else {
                    setError(true);
                    setLoading(false);

                }
                console.log("Terminando la validacion");
            }, 3000);
        }


        console.log("Terminando el efecto");

    }, [loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>

            <p>Por favor, escribe el codigo de seguridad para comprobar </p>

            {(error) && (
                <p>Error: El codigo es incorrecto</p>
            )}

            {/* {(error && !loading) && (
                <p>Error: El codigo es incorrecto</p>
            )} */}

            {loading && (
                <p>Cargando ...</p>
            )}

            <input
                placeholder='Codigo de seguridad'
                value={value}
                onChange={(event) => {
                    setError(false); // Hace desaparacer el error ni bien se cambia el input desventajas, se ejecuta cada vez que camia el input
                    setValue(event.target.value);
                }}
            />
            <button
                //onClick={() => setError(!error)}

                onClick={() => {
                    // setError(false); // Este funciona solo si se presiona el boton
                    setLoading(true);
                }}
            >Comprobar</button>
        </div>
    );
}

export { UseState };