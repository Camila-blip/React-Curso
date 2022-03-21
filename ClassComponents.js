import React,{ Component } from 'react';

//Sempre precisa ter uma tag pai, caso contrario da erro

class Equipe extends Component{
    render(){
        return(
            <div>
                <h2>Olá sou a {this.props.nome}</h2>
                <Cargo cargo={this.props.cargo}/>
                <Idade idade={this.props.idade}/>
                <Social/>
            </div>
        );
    }
}
class Cargo extends Component{
    render(){
        return(
            <div>
                <h2>Cargo: {this.props.cargo}</h2>
            </div>
        );
    }
}
class Idade extends Component{
    render(){
        return(
            <div>
                <h3>Idade: {this.props.idade}</h3>
            </div>
        );
    }
}
const Social = () => {
    return(
        <div>
            <a>
                Facebook
            </a>
        </div>
    );
} 

function App() {
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Camila" cargo="Programadora" idade="20"/>
        </div>
    )
}

export default App;
