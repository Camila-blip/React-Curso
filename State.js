import react, {Component} from 'react';

//States são dinâmicas

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: 'Camila',
            contador: 0
        }
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;
        this.setState(state);
    }

    diminuir(){
        let state = this.state;
        state.contador -= 1;
        this.setState(state)
    }
    
    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h3>
                    <button onClick={this.diminuir}> - </button> 
                        {this.state.contador}
                    <button onClick={this.aumentar}> + </button> 
                        
                </h3>
            </div>
        );
    }
}

export default App;
