import React from "react";

class Tabela extends React.Component{

    render() {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                    </tr>
                </thead>

                <tbody>
                    

                    {
                        this.props.dados.map((item, indice) => (
                            <tr key={indice}>
                                <td>{item.nome}</td>
                                <td>{item.idade}</td>
                            </tr>

                        ))
                    } 
                    
                              
                     
                    
                  
                  
                </tbody>
            </table>
        )
    }
}

export default Tabela;