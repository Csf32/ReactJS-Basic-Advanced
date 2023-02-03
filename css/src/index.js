import React from 'react';
import ReactDOM from 'react-dom';
import './estilos.css'


class Componente extends React.Component {

  render() {

      const estilo = {
        color: 'blue'
        
      }
      return (

        <div>
          <h1 style={{color: 'red', backgroundColor: 'yellow'}}>CSS interno</h1>
          <h1 style={ estilo }>CSS através de variáveis e constantes</h1>
        </div>
          
      )
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Componente />);