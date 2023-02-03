import React from "react";
import ReactDOM from "react-dom";

class Componente extends React.Component {

    render() {

        let cores = ["Azul", "Amarelo", "Vermelho"]

        let listar = cores.map((cor, indice) => {
            return <li key={ indice }>{ indice } - { cor }</li>
        })

        return (
            <ul>{ listar }</ul>
        )
    }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Componente />);