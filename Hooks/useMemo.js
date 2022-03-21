import react, { useState, useEffect,useMemo } from 'react';

function App() {
    // Primeiro parametro é o nome da state e o segundo e o nome que a gente vai usar para atualizar o valor da state
    //Agora state são separadas
    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState('');

    //Como se fosse  um componente componentDidMount /  Chamado quando o componente é montado
    useEffect(() => {
        const tarefasStorage = localStorage.getItem('tarefas');

        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage));
        }

    }, []);


    //substitui o componente de update
    useEffect(() => {
        localStorage.setItem('tarefas',JSON.stringify(tarefas));
    }, [tarefas])

    function handleAdd() {
        // consegue acessar os valores anteriores com ...tarefas, e após a virgula adiciona uma nova
        setTarefas([...tarefas, input])
        setInput('');
    }
    
    //Só executa quando nossa state sofre alterações
    const totalTarefas = useMemo(() => tarefas.length, [tarefas])

    return (
        <div>
            <ul>
                {tarefas.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <br/>
            <strong>Você tem {totalTarefas} tarefas!</strong>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button type="button" onClick={handleAdd}>Adicionar</button>
        </div>
    );
}


export default App;
