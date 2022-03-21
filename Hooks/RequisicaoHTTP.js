import React, {useEffect, useState}  from 'react';
import './estilo.css';

function App() {
    const [nutri, setNutri] = useState([]);

    //Quando carregar a página vai carregar tudo que está dentro do useEffect
    useEffect(() => {
        function loadApi(){
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

            fetch(url)
            //em caso de sucesso ele cai dentro do then
            //para conseguir trabalhar com ele tenho que transformar em json
            .then((r) => r.json())
            .then((json) =>{
                setNutri(json);
            })
        }
        loadApi();
    }, []);

    return (
        <div className='container'>
            <header>
                <strong>React Nutri</strong>
            </header>
            {nutri.map((item) => {
                return(
                    <article key={item.id} className="posts">
                        <strong className='titulo'>{item.titulo}</strong>
                        <img src={item.capa} alt={item.titulo} className="capa"/>
                        <p className='subtitulo'>
                            {item.subtitulo}
                        </p>
                        <input type="button" className='botao' value="Acessar" />
                    </article>
                )
            })}
        </div>
    );
}


export default App;
