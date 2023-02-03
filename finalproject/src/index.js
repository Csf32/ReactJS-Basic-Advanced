import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos.css'
import Formulario from './Formulario';
import Tabela from './Tabela';


class Principal extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      nome: '',
      idade: null,
      vetor: []
    }
  }

  aoDigitar = (campo) => {
    this.setState({ [campo.target.name] : campo.target.value })

  }

  aoClicar = (botao) => {
    
    botao.preventDefault()

    var copiaVetor = [...this.state.vetor]
 
    copiaVetor.push({ 
      'nome': this.state.nome,
      'idade': this.state.idade
    })

    this.setState({ vetor : copiaVetor })
  
  }

  render() {
    return (
      <div>
        <Formulario 
          funcaoCampo = { this.aoDigitar }
          funcaoBotao = { this.aoClicar }
        
        />
        <Tabela
          dados = { this.state.vetor }
        />
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Principal />)
