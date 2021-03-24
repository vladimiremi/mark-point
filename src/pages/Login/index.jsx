import { useState } from 'react';
import { useHistory } from 'react-router';
import './styles.css';
import api from '../../services/api';

export default function Login() {

  const history = useHistory();
  const [ email, setEmail] = useState()
  const [ password, setPassword] = useState()

  async function handleLogon(f){
    f.preventDefault();
    try {
      const response = await api.post('session-admin', { email, password } );
      localStorage.setItem('id_admin', response.data[0].id); //armazena o id do administrador no localStorage
      history.push('/list'); //direciona o usuário para essa rota
    } catch(err){
      alert("Erro ao tentar cadastra, por favor tente novamente!" + err);
    }


    

}

    return (
        <div className="login">
        <div className="login-container">
          <div>
            <h1>Seja bem-vindo</h1>
            <p>Para continuar</p>
            <p>por favor faça login</p>
  
            <h5>Logotipo</h5>
          </div>
          <div>
            <section>
              <p>Utilize o painel agora</p>
              <p>mesmo</p>
              <form action="" onSubmit={handleLogon}>
                <input 
                  type="e-mail" 
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <input 
                  type="password" 
                  placeholder="Digite sua senha" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button>Entrar</button>
              </form>
            </section>
  
          </div>
        
        </div>
      </div>
    )
}