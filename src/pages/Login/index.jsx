import './styles.css';

export default function Login() {
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
              <form action="">
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