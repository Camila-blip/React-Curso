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

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [user, setUser] = useState(false);
  const [userLogged, setUserLogged] = useState([]);

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

  useEffect(()=>{
    async function checkLogin(){
      await firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          setUser(true);
          setUserLogged({
            uid: user.uid,
            email: user.email
          })
          //se tem usuario logado entra aqui
        }else{
          //não possui usuário logado
          setUser(false);
          setUserLogged([]);
        }
      })
    }
    checkLogin()
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
  async function deletarPost(id){
    //deletar
    await firebase.firestore().collection('posts')
    .doc(id)
    .delete()
    .then(()=>{
      toast.success('Deletado com sucesso')
      setIdPost('');
      setAutor('');
      setTitulo('');
    })
    .catch((error =>{
      toast.error('Ops algo deu errado!')
    }))
  }
  async function novoUsuario(){
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((value)=>{
      toast.success(`${value.user.email} Cadastrado com sucesso`);
      setEmail('');
      setSenha('');
    })
    .catch((error)=>{
      if(error.code === 'auth/weak-password'){
        toast.info('Senha muito fraca..')
      }else if(error.code === 'auth/email-already-in-use'){
        toast.info('Esse email já existe!');
      }
    })
  }
  async function logout(){
    //para deslogar
    await firebase.auth().signOut();
  }
  async function fazerLogin(){
    await firebase.auth().signInWithEmailAndPassword(email,senha)
    .then((value)=>{
      toast.success('Login Realizado')
    })
    .catch((error)=>{
      toast.error('Ops algo deu errado')
    })
  }
  return (
    <div>
      <Container>
        <h2>ReactJS + Firebase :)</h2>
        {user &&(
          <div>
            <strong>Seja bem vindo! (Você está logado!)</strong> <br/>
            <span>{userLogged.uid} - {userLogged.email}</span><br/><br/>
          </div>
        )}

        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value) } />

        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value) } /><br/>
        <button onClick={ fazerLogin }>Fazer Login</button>
        <button onClick={ novoUsuario }>Cadastrar</button>
        <button onClick={ logout }>Sair da conta!</button><br/>
      </Container>
      <hr/>
      <Container>
        <h2>Banco de Dados</h2><br/>
        <label>ID:</label>
        <input type="text" value={idPost} onChange={ (e) => setIdPost(e.target.value)}/>

        <label>Título: </label>
        <textarea type="text" value={titulo} onChange={ (e) => setTitulo(e.target.value)}/>

        <label>Autor:</label>
        <input type="text" value={autor} onChange={ (e) => setAutor(e.target.value)}/>
      
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
                    <span>Autor: {post.autor}</span><br/>
                    <button onClick={ () => deletarPost(post.id) }>Deletar</button><br/><br/>
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
