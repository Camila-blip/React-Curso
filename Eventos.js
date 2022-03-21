//Pagina Principal
import react, {Component} from 'react';
import Membro from './Components/Membro';

class App extends Component{
    render(){
        return(
            <div>
                <Membro nome="Visitante" />
            </div>
        );
    }
}

export default App;

//Componente
import React, { Component } from 'react';

class Membro extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }
    entrar(){
        this.setState({nome: "Camila"});
    }
    sair(){
        this.setState({nome: "Visitante"});
    }
    render(){
        return(
            <div>
                <h2>Bem vinda {this.state.nome}</h2>
                <button onClick={this.entrar}>Entrar como Camila</button>
                <button onClick={this.sair}>Sair</button>
            </div>
        );
    }
}
export default Membro;
