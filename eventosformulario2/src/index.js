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
  enviarParaState = (campo) => {
   
    this.setState({ [campo.target.name] : campo.target.value })
  }


  render() {
    return(
      <form>
        <input type='text' placeholder='Nome' name='nome'onChange={ this.enviarParaState }></input>
        <input type='number' placeholder='Idade' name ='idade'onChange={ this.enviarParaState }></input>
       
        <p>{ this.state.nome }</p>
        <p>{ this.state.idade }</p>
      </form>
    )
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Componente/>)


