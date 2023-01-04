import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    })

    //console.log(state);


    //Estado declarativos
    const onConfirm = () => {
        setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
        });

    }

    const onError = () => {
        setState({
            ...state,
            error: true,
            loading: false
        });
    }

    const onWhrite = (newValue) => {
        setState({
            ...state,
            value: newValue,
        });
    }

    const onCheck = () => {
        setState({
            ...state,
            loading: true
        });
    }

    const onDelete = () => {
        setState({
            ...state,
            deleted: true,
        });
    }

    const onReseted = () => {
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: '',
        });
    }


    // const handleChange = (event) => {
    //     setState({
    //         ...state,
    //         value: event.target.value,
    //     });
    //     console.log(event.target.value);
    // }

    React.useEffect(() => {
        console.log('Empezando el efecto');
        if (state.loading) {
            // setError(false);
            setTimeout(() => {
                console.log("Haciendo la validación xd");
                if (state.value === SECURITY_CODE) {
                    onConfirm();
                    // setState({
                    //     ...state,
                    //     error: false,
                    //     loading: false,
                    //     confirmed: true,
                    // });
                } else {
                    onError();
                    // setState({
                    //     ...state,
                    //     error: true,
                    //     loading: false
                    // });
                }
                console.log("Terminando la validación");
            }, 1500);
        }
        console.log('Terminando el efecto');
    }, [state.loading]);

    if (!state.deleted && !state.confirmed) {
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escriba el código de seguridad.</p>

                {(state.error && !state.loading) && (
                    <p>El código es es incorrecto</p>
                )}

                {state.loading && (
                    <p>Cargando ...</p>
                )}

                <input
                    type='text'
                    placeholder='código de seguridad'
                    value={state.value}
                    onChange={(event) => {
                        onWhrite(event.target.value);
                    }}
                />
                <button
                    // onClick={()=>setError(!error)}
                    onClick={() => {
                        onCheck();
                        // setError(false);
                        // setState({
                        //     ...state,
                        //     loading: true
                        // });
                    }}
                >Comprobar</button>
            </div>
        );
    } else if (state.confirmed && !state.deleted) {
        return (
            <React.Fragment>
                <p>¿Seguro que quieres eliminar UseState?</p>
                <button
                    onClick={() => {
                        onDelete();
                        // setState({
                        //     ...state,
                        //     deleted: true,
                        // });
                    }}
                >Si, eliminar</button>
                <button
                    onClick={() => {
                        onReseted();
                        // setState({
                        //     ...state,
                        //     confirmed: false,
                        //     deleted: false,
                        //     value: '',
                        // })
                    }}
                >No, Me arrepenti</button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <p>Eliminado con exito</p>
                <button
                    onClick={() => {
                        onReseted();
                        // setState({
                        //     ...state,
                        //     confirmed: false,
                        //     deleted: false,
                        //     value: '',
                        // })
                    }}
                >Reseatear, volver atras</button>
            </React.Fragment>
        )
    }
}

export { UseState };
