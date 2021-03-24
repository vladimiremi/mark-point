import { useHistory } from 'react-router';
import './styles.css';

export default function Login() {

  const history = useHistory();

  function handleLogon (e) {
    e.preventDefault();

    history.push('/list');
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
                <input type="e-mail" placeholder="Digite seu e-mail" />
                <input type="e-mail" placeholder="Digite sua senha" />
                <button>Entrar</button>
              </form>
            </section>
  
          </div>
        
        </div>
      </div>
    )
}