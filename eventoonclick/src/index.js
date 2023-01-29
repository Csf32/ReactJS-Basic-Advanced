import React from 'react';
import ReactDOM from 'react-dom'

class MeuComponente extends React.Component {
  
  mensagem() {
    alert("Hello World")
  }

  render(){
    
    return <button onClick={ this.mensagem }>Clique aqui</button>
  }

}

ReactDOM.render(<MeuComponente/>, document.getElementById("root"));