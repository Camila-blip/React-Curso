import { useState, useEffect } from "react";
import firebase from "./firebaseConnection";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './style';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);
  const [idPost, setIdPost] = useState('');

  useEffect(()=>{
    async function loadPosts(){
      await firebase.firestore().collection('posts')
      //fica monitorando para ver se algo foi alterado
      .onSnapshot((doc)=>{
        let meusPosts = [];
        doc.forEach((item)=>{
          meusPosts.push({
            id: item.id,
            titulo: item.data().titulo,
            autor: item.data().autor
          })
        });
        setPosts(meusPosts);
      })
    }
    loadPosts();
  },[])

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
    //Pega todos os posts
    await firebase.firestore().collection('posts')
    .get()
    .then((snapshot)=>{
      let lista = [];
      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        })
      })
      setPosts(lista);

    })
    .catch((error =>{
      toast.error('Ops algo deu errado!')
    }))
  }
  async function editarPost(){
    //update
    await firebase.firestore().collection('posts')
    .doc(idPost)
    .update({
      titulo: titulo,
      autor: autor
    })
    .then(()=>{
      toast.success('Alterado com sucesso')
      setIdPost('');
      setAutor('');
      setTitulo('');
    })
    .catch((error =>{
      toast.error('Ops algo deu errado!')
    }))
  }
  return (
    <div>
      <h1>ReactJS + Firebase</h1><br/>
      <Container>
        <label>ID:</label>
        <input type="text" value={idPost} onChange={ (e) => setIdPost(e.target.value)}></input>

        <label>Título: </label>
        <textarea type="text" value={titulo} onChange={ (e) => setTitulo(e.target.value)}></textarea>

        <label>Autor:</label>
        <input type="text" value={autor} onChange={ (e) => setAutor(e.target.value)}></input>
      
        <button onClick={ handleAdd }>Cadastrar</button>
        <button onClick={ buscaPost }>Pesquisar</button>
        <button onClick={ editarPost }>Editar</button><br/>
        <ul>
          {
            posts.map(post=>{
              return(
                <li key={post.id}>
                    <span>ID - {post.id}</span><br/>
                    <span>Titulo: {post.titulo}</span><br/>
                    <span>Autor: {post.autor}</span><br/><br/>
                </li>
              )
            })
          }
        </ul>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
