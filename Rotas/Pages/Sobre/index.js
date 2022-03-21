import { Link } from 'react-router-dom';

export default function Sobre() {
    
    return (
        <div>
           <h2>Sobre o curso Reactjs...</h2>
           <br/>
            <Link to="/contato">Contato</Link>
           <br/>
           <Link to="/">Home</Link>
        </div>
    );
}