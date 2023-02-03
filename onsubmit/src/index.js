import React from 'react';
import ReactDOM from 'react-dom/client';

class Componente extends React.Component{
  
  minhaFuncao = () => {
    alert("Testando evento onSubmit")
  }

  //Só pode ter um onsubmit por formulário
  //Submit envia, precisa colocar no form um action para onde se quer enviar ou então fazer um break para não atualizar e nem enviar
  render() {
    return(
      <form onSubmit={ this.minhaFuncao }>
        <input type='submit'></input>
      </form>
    )
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Componente/>)
