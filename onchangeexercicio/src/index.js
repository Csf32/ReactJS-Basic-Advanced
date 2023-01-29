import React from 'react';
import ReactDOM from 'react-dom/client';

class Componente extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { texto: this.props.textoInicial }
  }

  minhaFuncao = (obj) => {
    this.setState({ texto: obj.target.value })
  }

  render() {

    return (

      <div>
        <h1>{ this.state.texto }</h1>
        <input type='text' onChange={ this.minhaFuncao } value={ this.state.texto }></input>
      </div>
    
    )
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(< Componente textoInicial = "Digite algo..."/>);
 
