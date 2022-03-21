import react, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: null,
            email: null,
            senha: null,
            error: null
        };
        this.cadastrar = this.cadastrar.bind(this);
    }
    cadastrar(event){
       const {nome, email, senha} = this.state;

       if(nome !== null && email != null && senha !== null){
         alert(`Nome ${nome} \nEmail: ${email} \nSenha: ${senha}`)
       }else{
        this.setState({error: 'Ops! Parece que esta faltando algo;'})
       }
      
       ///Nao submita a página
       event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Novo usuario</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} />
                    <br />
                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                    <br />
                    <label>Senha:</label>
                    <input type="password" name="email" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} />
                    <br />
                    <button type="submit">Cadastrar</button>
                  
                    <div>
                        <h3>
                            {this.state.nome}
                        </h3>
                        <h3>
                            {this.state.email}
                        </h3>
                        <h3>
                            {this.state.senha}
                        </h3>
                    </div>
                </form>
            </div>
        );
    }
}

export default App;
