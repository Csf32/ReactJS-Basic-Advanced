import React from 'react';
import ReactDOM from 'react-dom/client';

class Componente extends React.Component{
  
  minhaFuncao = (elemento) => {
    elemento.preventDefault()
    alert("Testando evento onSubmit")
  
  }

  render() {
    return(
      <form onSubmit={ this.minhaFuncao }>
        <input type='submit'></input>
      </form>
    )
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Componente/>)

