import React from 'react';
import ReactDOM from 'react-dom';

class Componente extends React.Component {

  mensagem(nome){
    alert("Ola!" + nome);
  }

  render(){
    
    return <button onClick={ this.mensagem.bind(this, "Caique") }>Clique aqui</button>
  }
}

ReactDOM.render(<Componente />, document.getElementById("root"))
