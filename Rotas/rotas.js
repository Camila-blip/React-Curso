import { 
    BrowserRouter as Router,  
    Routes, 
    Route
} from 'react-router-dom';
import Contato from './Pages/Contato';
import Erro from './Pages/Erro';
import Header from './Components/Header';
import Home from './Pages/Home';
import Produto from './Pages/Produto';
import Sobre from './Pages/Sobre';

const Rotas = () =>{
    return(
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/sobre" element={<Sobre/>}/>
                <Route exact path="/contato" element={<Contato/>}/>
                <Route path="/produto/:id" element={<Produto/>}/>

                <Route path="*" element={<Erro/>}/>
            </Routes>
        </Router>
    )
}

export default Rotas;
