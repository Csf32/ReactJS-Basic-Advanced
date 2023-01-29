import React from 'react';
import ReactDOM from 'react-dom';

class ComponenteArrowFunction extends React.Component {

  mensagem(nome){
    alert('Olá' + nome)
  }

  minhaArrowFunction = (curso) => {
    alert("Fazendo o curso de " + curso)
  }

  render(){
    return (
      <div>
        <button onClick={ this.mensagem.bind(this, "Caique") }>Clique aqui</button>
        <button onClick={ () => this.minhaArrowFunction("ReactJS") }>ArrowFunciton</button>
      </div>
    ) 
    
  }
  
}

ReactDOM.render(<ComponenteArrowFunction/>, document.getElementById("root"))