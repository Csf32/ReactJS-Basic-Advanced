import React from 'react'
import ReactDOM from 'react-dom'
import Componente1 from './Componente1'
import Componente2 from './Componente2'

class Principal extends React.Component {
  
    render() {
        return(
            <div>
                <Componente1 />
                <Componente2 />
            </div>
        )
    }
}

ReactDOM.render(<Principal />, document.getElementById('root'))