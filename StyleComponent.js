import react from 'react';
import './App.css';
import {Container, Head, BemVindo} from './styles';

function App() {
  return (
    <Container>
        <Head>
          <a>Projeto Styled</a>
        </Head>
        <BemVindo cor="00FF00" tamanho="15">
          Bem vindo ao sistema
        </BemVindo>
    </Container>
  );
}

export default App;
