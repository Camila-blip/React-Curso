import { useState, createContext } from "react";

export const UserContext = createContext({});

export default function UserProvider({children}){
    const [alunos, setAlunos] = useState('Sujeito Programador');
    const [qtdAlunos, setQrdAlunos] = useState(85);
    return(
        <UserContext.Provider value={ {alunos, setAlunos, qtdAlunos }}>
            {children}
        </UserContext.Provider>
    )
}
