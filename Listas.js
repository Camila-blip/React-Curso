//pagina principal
import react, {Component} from 'react';
import Feed from './Components/Feed';

class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            feed:[
                {id: 1, username: 'Matheus', curtidas: 10, comentarios: 2},
                {id: 2, username: 'Camila', curtidas: 120, comentarios: 24},
                {id: 3, username: 'Amanda', curtidas: 30, comentarios: 12},

            ]
        };
    }
    render(){
        return(
            <div>
               {this.state.feed.map((item)=>{
                   return(
                    <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
                   );
               })}
            </div>
        );
    }
}

export default App;

//Componente

import react, { Component } from 'react';

class Feed extends Component {
    render() {
        return (
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <a>{this.props.curtidas} curtidas /
                    comentarios {this.props.comentarios}</a>
            </div>
        );
    }
}
export default Feed; 
