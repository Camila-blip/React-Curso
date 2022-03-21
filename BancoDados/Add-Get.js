import { useState } from "react";
import firebase from "./firebaseConnection";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './style';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  async function handleAdd(){
    await firebase.firestore().collection('posts')
    .add({
      titulo: titulo,
      autor: autor
    })
    .then(()=>{
      toast.success('Cadastrado com sucesso')
      setTitulo('')
      setAutor('')
    })
    .catch((error =>{
      toast.error('Ops algo deu errado!')
    }))
  }
  async function buscaPost(){
    await firebase.firestore().collection('posts')
    .doc('12345')
    .get()
    .then((snapshot)=>{
      setTitulo(snapshot.data().titulo);
      setAutor(snapshot.data().autor)
    })
    .catch((error =>{
      toast.error('Ops algo deu errado!')
    }))
  }

  return (
    <div>
      <h1>ReactJS + Firebase</h1><br/>
      <Container>
        <label>Título: </label>
        <textarea type="text" value={titulo} onChange={ (e) => setTitulo(e.target.value)}></textarea>

        <label>Autor:</label>
        <input type="text" value={autor} onChange={ (e) => setAutor(e.target.value)}></input>
      
        <button onClick={ handleAdd }>Cadastrar</button>
        <button onClick={ buscaPost }>Pesquisar</button>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
