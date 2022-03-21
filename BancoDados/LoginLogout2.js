import { useState } from "react";
import firebase from "./firebaseConnection";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './style';

function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cargo, setCargo] = useState('');
  const [nome, setNome] = useState('');

  const [user, setUser] = useState({});

  async function novoUsuario(){
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then( async (value)=>{
      await firebase.firestore().collection('users')
      .doc(value.user.uid)
      //coloca dentro do banco
      .set({
        nome: nome,
        cargo: cargo,
        status: true
      })
      .then(()=>{
        setNome('');
        setCargo('');
        setEmail('');
        setSenha('');
      })
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
    setUser({});
    setEmail('');
    setSenha('');
  }
  async function login(){
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then( async (value)=>{
      await firebase.firestore().collection('users')
      .doc(value.user.uid)
      .get()
      .then((snapshot)=>{
        setUser({
          nome: snapshot.data().nome,
          cargo: snapshot.data().cargo,
          status: snapshot.data().status,
          email: value.user.email
        });
      })
      
    })
    .catch((error)=>{
      toast.error('Erro ao logar')
    })

  }

  return (
    <div>
        <h2>ReactJS + Firebase :)</h2>
    <Container>
      <label>Nome:</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value) } /><br/>

      <label>Cargo:</label>
      <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value) } /><br/>

      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value) } />

      <label>Senha:</label>
      <input type="password" value={senha} onChange={(e) => setSenha(e.target.value) } /><br/>

      <button onClick={ login }>Fazer Login</button>
      <button onClick={ novoUsuario }>Cadastrar</button>
      <button onClick={ logout }>Sair da conta!</button><br/>
      <ToastContainer />
    </Container>
    <hr/><br/>
    {Object.keys(user).length > 0 &&(
      <div>
        <strong>Olá</strong> {user.nome} <br/>
        <strong>Cargo: </strong> {user.cargo}<br/>
        <strong>Email: </strong> {user.email}<br/>
        <strong>Status: </strong> {String(user.status)}<br/>
      </div>
    )}
    </div>
  );
}

export default App;
