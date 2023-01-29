import React from 'react';
import ReactDOM from 'react-dom';

class ComponenteOnChange extends React.Component {

  teclado = (obj) => {
    console.log(obj.target.value)
  }

  render(){
    return (
      <div>
        <button>EventoOnChange</button>
      
        <hr>
          <input type='text' onChange={ this.teclado }></input> 
        </hr>
      </div>
    )
  }

}

ReactDOM.render(<ComponenteOnChange/>, document.getElementById("root"))