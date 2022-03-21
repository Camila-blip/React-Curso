import React from 'react';

//só funciona em uma linha quando só  é uma única linha de código
//Props são estáticas

const Bemvindo2 = () => <h3>Teste</h3>

const Bemvindo = (props) => {
    return(
        <div>
            <h2>
                Bem-vinda(a) {props.nome}
            </h2>
            <h3>Tenho {props.QualquerIdade} anos</h3>
        </div>
    );
}

function PropsComponents() {
    return (
        <div>
            Olá Mundo!
            <Bemvindo nome="Camila" QualquerIdade="20"/>
            <Bemvindo2/>
            <h1>Curso</h1>
        </div>
    )
}

export default PropsComponents;
