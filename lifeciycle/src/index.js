import React from 'react';
import ReactDOM from 'react-dom';


class Componente extends React.Component {

  constructor(props) {
    super(props);

    this.state = {cor: 'cinza escuro'}
  }

  //Há 3 estágios do lifecycle com suas respectivas funções: mouting, updating e unmounting
  //Mudando 2s após realizar o render: Mounting
  
   componentDidMount() {
    setTimeout(()=> {
      this.setState({cor: "azul escuro"})
    },2000)
  }
  
  render() {

    
    
      return (

        <div>
          <h1>Minha cor preferida é {this.state.cor}</h1> 
          
        </div>
          
      )
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Componente />);