
import { Link } from 'react-router-dom';

export default function Contato() {
    
    return (
        <div>
           <h1>Contatos</h1>
            <span>Email: millahrodriguez@Outlook.com</span>
            <br/>
            <Link to="/sobre"> Sobre</Link>
           <br/>
           <Link to="/">Home</Link>
        </div>
    );
}