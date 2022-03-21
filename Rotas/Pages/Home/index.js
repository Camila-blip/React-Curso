import { Link } from 'react-router-dom';

export default function Home() {
    //Com rotas nossas páginas não são recarregadas
    return (
        <div>
           <h2>Bem vindo a pagina HOME!</h2>
           <Link to="/sobre"> Sobre</Link>
           <br/>
           <Link to="/contato">Contato</Link>
        </div>
    );
}