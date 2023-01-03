import React from 'react';


class ClassState extends React.Component {
    constructor(props) {
        // Llamo a super por que extiende de otra clase
        super(props);

        this.state = {
            error: false,
        };
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el codigo de seguridad para comprobar </p>

                {this.state.error && (
                    <p>Error: El codigo es incorrecto</p>
                )}
                <input placeholder='Codigo de seguridad' />
                <button
                    //onClick={() => this.setState({ error: !this.state.error })}
                    onClick={() =>
                        this.setState(prevState => ({ error: !prevState.error }))
                    }
                >Comprobar</button>
            </div>
        );
    }

}


export { ClassState };