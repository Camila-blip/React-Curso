import react, {Component} from 'react';

//States são dinâmicas

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00'
        };
    }
    //Chamado quando o componente é montado
    componentDidMount(){
        setInterval(() =>{
            //para mudar o state
            this.setState({hora: new Date().toLocaleTimeString()})
        }, 1000);
    }
    //Quando o component a cima é executado esse passa a ser utilizado
    componentDidUpdate(){
       console.log('Atualizou')
    }
    //retorna true ou falso
    shouldComponentUpdate(){
    }

    render(){
        return(
            <div>
                <h1>Meu Projeto {this.state.hora}</h1>
            </div>
        );
    }
}

export default App;
