import { IoMdCamera } from "react-icons/io";
import Bar from "../../components/Bar/Bar";
import './styles.css';

export default function Register() {
    return(
      <div className="register-container">
        <Bar />

        <body className="register-body">
                <section>
                        <div className="register-title">
                            <div>
                                <h2>Adicionar Colaborador</h2>
                                <section className="button">
                                    <button>Cancelar</button>
                                    <button>Salvar</button>
                                </section>
                            </div>
                            
                        </div>
                        
                        <div className="content-register">
                            <div className="content-register__profile">
                                <section >
                                    <div>
                                        <IoMdCamera />
                                    </div>
                                    <input placeholder="Nome do colaborador"/>
                                </section>
                                <div className="content-register__informations">
                                    <p className="information-bold">Informações</p>
                                    <section className="content-register__informations-item">
                                        <section>
                                            <div>
                                                <p className="information-bold">CPF</p>
                                                <input placeholder="Digite o CPF"/>
                                            </div>
                                            <div>
                                                <p className="information-bold">E-mail</p>
                                                <input placeholder="Digite seu E-mail"/>
                                            </div>
                                            
                                            
                                        </section>

                                        <div>
                                            <p className="information-bold">Telefone</p>
                                            <input placeholder="(xx) xxxx-xxxx"/>
                                        </div>
                                        

                                       
                                    </section>

                                    <section className="content-register__informations-work">
                                        <section>
                                            <div>
                                                <p className="information-bold information-blue">Ocupação</p>
                                                <input placeholder="Ocupação do colaborador?"/>
                                            </div>
                                            <div>
                                                <p className="information-bold information-blue">Horário de Expediente</p>
                                                <section>
                                                    <input placeholder="Horário de entrada"/>
                                                    <input placeholder="Horário de saída"/>
                                                </section>
                                                
                                            </div>
                                        </section>
                                        <div>
                                                <p className="information-bold information-blue">Horário de almoço</p>
                                                <section>
                                                    <input placeholder="Horário de entrada"/>
                                                    <input placeholder="Horário de saída"/>
                                                </section>
                                                
                                            </div>
                                    </section>
                                </div>

                            </div>
                        </div>

                </section>
                

            </body>
      </div>
    );
};