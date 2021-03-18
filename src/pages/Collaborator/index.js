import profile from '../../assets/perfil.png';
import Bar from "../../components/Bar/Bar";
import './styles.css'

export default function Collaborator() {
    return (
        <div className='collaborator-container'>
            <Bar />
            <body className="body">
                <section>
                        <div className="title">
                            <div>
                                <h2>Detalhes do colaborador</h2>
                                <section className="button">
                                    <button>Inativar Colaborador</button>
                                    <button>Editar Colaborador</button>
                                </section>
                            </div>
                            
                        </div>
                        
                        <div className="body-collarotor">
                            <div className="body-collarotor__profile">
                                <section >
                                    <img src={profile} alt=""/>
                                    <div>
                                        <h2 className="information-bold">Vladimir Costa</h2>
                                        <p>Cadastrado em 28/12/2020</p>
                                    </div>

                                </section>
                                <div className="body-collarotor__informations">
                                    <p className="information-bold">Informações pessoais</p>
                                    <section className="body-collarotor__informations-item">
                                        <section>
                                            <div>
                                                <p className="information-bold">CPF</p>
                                                <p>000.000.000-53</p>
                                            </div>
                                            <div>
                                                <p className="information-bold">Telefone</p>
                                                <p>86981266700</p>
                                            </div>
                                            
                                            
                                        </section>

                                        <div>
                                            <p className="information-bold">E-mail</p>
                                            <p>vladimirpiaui11@gmail.com</p>
                                        </div>
                                        

                                       
                                    </section>

                                    <section className="body-collarotor__informations-work">
                                        <section>
                                            <div>
                                                <p className="information-bold information-blue">Ocupação</p>
                                                <p>Assistente de RH</p>
                                            </div>
                                            <div>
                                                <p className="information-bold information-blue">Horário de Expediente</p>
                                                <p>8:30 ás 17:30</p>
                                            </div>
                                        </section>
                                        <div>
                                            <p className="information-bold information-blue">Horário de almoço</p>
                                            <p>12:00 ás 13:00</p>
                                        </div>
                                    </section>
                                </div>

                            </div>
                            <div className="collaborator-history">

                                <h2>Histórico de entrada e saída</h2>
                                <ul className="collaborator-history-list">
                                    <li className="collaborator-history-list__point">
                                            <div>
                                                <h3>25</h3>
                                                <h4>Dezembro</h4>
                                            </div>
                                            <div>
                                                <p className="information-bold information-blue">Expediente</p>
                                                <section>
                                                    <p className="information-bold">Entrou</p>
                                                    <p>08:30</p>
                                                </section>
                                                
                                                <section>
                                                    <p className="information-bold">Saiu</p>
                                                    <p className="information-orange">17:50</p>
                                                </section>
                                                
                                            </div>
                                            <div>
                                            <p className="information-bold information-blue">Almoço</p>
                                                <section>
                                                    <p className="information-bold">Entrou</p>
                                                    <p>12:00</p>
                                                </section>
                                            
                                            <section>
                                                    <p className="information-bold">Saiu</p>
                                                    <p>13:00</p>
                                            </section>
                                                
                                            </div>
                                    </li>
                                    <li className="collaborator-history-list__point">
                                            <div>
                                                <h3>25</h3>
                                                <h4>Dezembro</h4>
                                            </div>
                                            <div>
                                                <p className="information-bold information-blue">Expediente</p>
                                                <section>
                                                    <p className="information-bold">Entrou</p>
                                                    <p>08:30</p>
                                                </section>
                                                
                                                <section>
                                                    <p className="information-bold">Saiu</p>
                                                    <p className="information-orange">17:50</p>
                                                </section>
                                                
                                            </div>
                                            <div>
                                            <p className="information-bold information-blue">Almoço</p>
                                                <section>
                                                    <p className="information-bold">Entrou</p>
                                                    <p>12:00</p>
                                                </section>
                                            
                                            <section>
                                                    <p className="information-bold">Saiu</p>
                                                    <p>13:00</p>
                                            </section>
                                                
                                            </div>
                                    </li>
                                    <li className="collaborator-history-list__point">
                                            <div>
                                                <h3>25</h3>
                                                <h4>Dezembro</h4>
                                            </div>
                                            <div>
                                                <p className="information-bold information-blue">Expediente</p>
                                                <section>
                                                    <p className="information-bold">Entrou</p>
                                                    <p>08:30</p>
                                                </section>
                                                
                                                <section>
                                                    <p className="information-bold">Saiu</p>
                                                    <p className="information-orange">17:50</p>
                                                </section>
                                                
                                            </div>
                                            <div>
                                            <p className="information-bold information-blue">Almoço</p>
                                                <section>
                                                    <p className="information-bold">Entrou</p>
                                                    <p>12:00</p>
                                                </section>
                                            
                                            <section>
                                                    <p className="information-bold">Saiu</p>
                                                    <p>13:00</p>
                                            </section>
                                                
                                            </div>
                                    </li>
                                    <li className="collaborator-history-list__point">
                                            <div>
                                                <h3>25</h3>
                                                <h4>Dezembro</h4>
                                            </div>
                                            <div>
                                                <p className="information-bold information-blue">Expediente</p>
                                                <section>
                                                    <p className="information-bold">Entrou</p>
                                                    <p>08:30</p>
                                                </section>
                                                
                                                <section>
                                                    <p className="information-bold">Saiu</p>
                                                    <p className="information-orange">17:50</p>
                                                </section>
                                                
                                            </div>
                                            <div>
                                            <p className="information-bold information-blue">Almoço</p>
                                                <section>
                                                    <p className="information-bold">Entrou</p>
                                                    <p>12:00</p>
                                                </section>
                                            
                                            <section>
                                                    <p className="information-bold">Saiu</p>
                                                    <p>13:00</p>
                                            </section>
                                                
                                            </div>
                                    </li>
                                    <li className="collaborator-history-list__point">
                                            <div>
                                                <h3>25</h3>
                                                <h4>Dezembro</h4>
                                            </div>
                                            <div>
                                                <p className="information-bold information-blue">Expediente</p>
                                                <section>
                                                    <p className="information-bold">Entrou</p>
                                                    <p>08:30</p>
                                                </section>
                                                
                                                <section>
                                                    <p className="information-bold">Saiu</p>
                                                    <p className="information-orange">17:50</p>
                                                </section>
                                                
                                            </div>
                                            <div>
                                            <p className="information-bold information-blue">Almoço</p>
                                                <section>
                                                    <p className="information-bold">Entrou</p>
                                                    <p>12:00</p>
                                                </section>
                                            
                                            <section>
                                                    <p className="information-bold">Saiu</p>
                                                    <p>13:00</p>
                                            </section>
                                                
                                            </div>
                                    </li>
                                   
                            
                                   
                                    
                                </ul>
                            </div>
                        </div>

                </section>
                

            </body>
        </div>
    )
}