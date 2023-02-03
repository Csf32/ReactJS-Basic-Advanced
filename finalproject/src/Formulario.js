import React from 'react';

class Formulario extends React.Component{

    render() {
        return(
            <form onSubmit={ this.props.funcaoBotao }>
                <input type='text' placeholder = "Informe seu nome" className='form-control' name='nome' onChange={ this.props.funcaoCampo }></input>
                <input type='text' placeholder = "Informe sua idade" className='form-control' name='idade' onChange={ this.props.funcaoCampo }></input>
                <input type='submit' value= "Cadastrar" className='btn btn-primary' ></input>
            </form>
        )
    }
}

export default Formulario;