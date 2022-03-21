import React from 'react';

const Equipe = (props) => { 
    return(
        <div>
            <Sobre username={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social Git={props.Github}/>
        </div>
    );
}
const Sobre = (props) => { 
    return(
        <div>
           <h2>Olá sou a {props.username}</h2>
           <h3>Cargo: {props.cargo}</h3>
           <h3>Idade: {props.idade}</h3>
        </div>
    );
}

const Social = (props) => { 
    return(
        <div>
           <a href={props.Git} target="_blank">GitHub</a>
           <a>Linkedin</a>
           <a>Youtube</a>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Camila" Cargo="Programadora" idade="20" Github="https://github.com/Camila-blip"/>
            <Equipe nome="Jhenifer" Cargo="Analista de Sistemas" idade="24"/>
        </div>
    )
}

export default App;
