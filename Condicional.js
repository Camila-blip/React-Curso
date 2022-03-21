import react, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: 1,
            tipo: false
        };
    }
    render(){
        return(
            <div>
                {this.state.status === 1 &&
                <h1>Olá!</h1>}
                
                {this.state.tipo ?
                    <div>
                        <h2>Verdadeiro</h2>
                    </div> :
                    <div>
                        <h2>falso</h2>
                    </div>
                };
            </div>
        );
    }
}

export default App;
