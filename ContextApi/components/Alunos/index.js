import Nome from '../Nome';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

// Quando não é export default precisa das chaves -- export default é mais para exportar uma página -- não pode ter 2 export default no mesmo arquivo
export default function Alunos(){
    const {qtdAlunos} = useContext(UserContext)
    return(
        <div>
            <h2>Component Alunos: NOME DO ALUNO ONLINE: {qtdAlunos}</h2>
            <Nome/>
        </div>
    )
}