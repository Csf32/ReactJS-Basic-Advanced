import React from 'react';
import ReactDOM from 'react-dom'

//Sem JSX

// const elemento = React.createElement('h1', {}, 'Sem JSX') //Função JS (Tag html q se quer usar,{característica}, conteúdo )
// ReactDOM.render(elemento, document.getElementById('root'))

//Com JSX 

//Não precisa criar o react.createElement
ReactDOM.render(<h1>Com JSX</h1>, document.getElementById('root'))