import React from 'react';
import ReactDOM from 'react-dom/client';

class Componente extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      nome: '',
      idade: null
    }
  }
  funcaoIdade = (campo) => {
    this.setState({ idade: campo.target.value })
  }

  funcaoNome = (campo) => {
    this.setState({ nome: campo.target.value })
  
  
  }

  render() {
    return(
      <form>
        <input type='text' placeholder='Nome' onChange={ this.funcaoNome }></input>
        <input type='number' placeholder='Idade' onChange={ this.funcaoIdade }></input>
       
        <p>{ this.state.nome }</p>
        <p>{ this.state.idade }</p>
      </form>
    )
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Componente/>)


