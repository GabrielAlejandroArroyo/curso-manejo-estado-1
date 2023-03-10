import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
    constructor(props) {
        // Llamo a super por que extiende de otra clase
        super(props);

        this.state = {
            value: '',
            error: false,
            loading: false,
        };
    }


    // Metodos del ciclo de vodad
    //componentWillMount() {
    // UNSAFE_componentWillMount() {
    //     console.log("componentWillMount");
    // }

    // componentDidMount() {
    //     console.log("componentDidMount");
    // }

    componentDidUpdate() {
        console.log("Actualizando");
        if (!!this.state.loading) {
            //Esperarndo
            setTimeout(() => {
                console.log("Haciendo la validacion");

                //this.setState({ loading: false })
                if (this.state.value === SECURITY_CODE) {
                    this.setState({ error: false, loading: false })
                    //setLoading(false)
                    //setError(false);
                } else {
                    this.setState({ error: true, loading: false })
                    //setError(true);
                    //setLoading(false);

                }

                console.log("Terminando la validacion");
            }, 3000);
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el codigo de seguridad para comprobar </p>

                {(this.state.error && !this.state.loading) && (
                    <p>Error: El codigo es incorrecto</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}


                <input
                    placeholder='Codigo de seguridad'
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value });
                    }}
                />
                <button
                    //onClick={() => this.setState({ error: !this.state.error })}
                    // onClick={() =>
                    //     this.setState(prevState => ({ error: !prevState.error }))
                    // }
                    onClick={() => this.setState({ loading: true })}
                >Comprobar</button>
            </div>
        );
    }

}


export { ClassState };