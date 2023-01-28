import React from 'react'
import ReactDOM from 'react-dom'

class Componente extends React.Component{
  render() {
    //Para chamar o props,se utliza o this, pois esse vai pegar o nome a partir do Componente
    return(
      <div>
        <p>{ this.props.informacoes.nome }</p>
        <p>{ this.props.informacoes.idade }</p>
      </div>
    )
    
  }
}
//Enviando um JSON
var dados = {
  nome: "Caique Fonseca",
  idade: 26
}
//Criando um prop / propriedade do componente e especificando um valor
// Abrindo colchetes é para poder passar uma função ou uma variável
ReactDOM.render(<Componente informacoes = {dados} />, document.getElementById('root'))