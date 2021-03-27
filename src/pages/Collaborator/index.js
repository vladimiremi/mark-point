import { useEffect, useState } from 'react';
import profile from '../../assets/perfil.png';
import Bar from "../../components/Bar/Bar";
import './styles.css'
import api from '../../services/api'
import { useHistory } from 'react-router';

export default function Collaborator() {

    const idInfCollaborator = localStorage.getItem('idInfCollaborator');
    const id_admin = localStorage.getItem('id_admin');

    const [informationsColaborator, setInformationsColaborator] = useState()
    const [pointsOfDay, setPointsOfDay] = useState();

    const history = useHistory();

    const dataCadastro = informationsColaborator?.createdAt; //informação da tada de cadastro do colaborador


    useEffect(()=>{
        try {
            //informações do colaborador
            api.get(`informations-collaborator/${idInfCollaborator}`, {
                headers: {
                    Authorization: id_admin,
                }
            }).then(response => {
                setInformationsColaborator(response.data[0]);
            });

            //histórico de pontos do colaborador
            api.get('list-points', {
                headers: {
                    Authorization: idInfCollaborator,
                }
            }).then(response => {
                //faz a separação do array agrupadas de 4 em 4.
                let pointsDay = [];
                const corte = 4;
                for (var i = 0; i < response.data.length; i = i + corte) {
                    pointsDay = [...pointsDay, response.data.slice(i, i + corte)]
                  }
            
                  setPointsOfDay(pointsDay);



            })

        } catch(err){

        }
    }, []);

    async function inactivateCollaborator(id) {

       await api.put(`update-collaborator/${id}`, {active: false}, {
            headers: {
                Authorization: id_admin,
            }
        })
        history.push('/list');
    }

    function handleUpdateCollaborator() {
        

        history.push('/update');
    }

    return (
        <div className='collaborator-container'>
            <Bar />
            <body className="body">
                <section>
                        <div className="title">
                            <div>
                                <h2>Detalhes do colaborador</h2>
                                <section className="button">
                                    <button onClick={ ()=> inactivateCollaborator(idInfCollaborator)}>Inativar Colaborador</button>
                                    <button onClick={handleUpdateCollaborator}>Editar Colaborador</button>
                                </section>
                            </div>
                            
                        </div>
                        
                        <div className="body-collarotor">

                            <div className="body-collarotor__profile">
                                <section >
                                    <img src={profile} alt=""/>
                                    <div>
                                        <h2 className="information-bold">{informationsColaborator?.name}</h2>
                                        <p>Cadastrado em {dataCadastro?.slice(8, 10)}{ dataCadastro?.slice(4, 8)}{ dataCadastro?.slice(0, 4)}</p>
                                    </div>

                                </section>
                                <div className="body-collarotor__informations">
                                    <p className="information-bold">Informações pessoais</p>
                                    <section className="body-collarotor__informations-item">
                                        <section>
                                            <div>
                                                <p className="information-bold">CPF</p>
                                                <p>{informationsColaborator?.cpf}</p>
                                            </div>
                                            <div>
                                                <p className="information-bold">Telefone</p>
                                                <p>{informationsColaborator?.phone}</p>
                                            </div>
                                            
                                            
                                        </section>

                                        <div>
                                            <p className="information-bold">E-mail</p>
                                            <p>{informationsColaborator?.email}</p>
                                        </div>
                                        

                                       
                                    </section>

                                    <section className="body-collarotor__informations-work">
                                        <section>
                                            <div>
                                                <p className="information-bold information-blue">Ocupação</p>
                                                <p>{informationsColaborator?.occupation}</p>
                                            </div>
                                            <div>
                                                <p className="information-bold information-blue">Horário de Expediente</p>
                                                <p>{informationsColaborator?.startexpedient.slice(0, 5)} ás {informationsColaborator?.endtexpedient.slice(0, 5)}</p>
                                            </div>
                                        </section>
                                        <div>
                                            <p className="information-bold information-blue">Horário de almoço</p>
                                            <p>{informationsColaborator?.startlunch.slice(0, 5)} ás {informationsColaborator?.endlunch.slice(0, 5)}</p>
                                        </div>
                                    </section>
                                </div>

                        </div>
                            <div className="collaborator-history">

                                <h2>Histórico de entrada e saída</h2>
                                <ul className="collaborator-history-list">
                                    {pointsOfDay ? pointsOfDay.map(pointday => (
                                        <li className="collaborator-history-list__point">
                                                <div>
                                                    <h3>{pointday[0].timestring.slice(8, 10)}</h3>
                                                    <h4>{pointday[0].timestring.slice(5, 7)}</h4>
                                                </div>
                                                <div>
                                                    <p className="information-bold information-blue">Expediente</p>
                                                    <section>
                                                        <p className="information-bold">Entrou</p>
                                                        <p>{pointday[0]?.timestring.slice(11, 16)}</p>
                                                        
                                                    </section>
                                                    
                                                    <section>
                                                        <p className="information-bold">Saiu</p>
                                                        <p className="information-orange">{pointday[3]?.timestring.slice(11, 16)}</p>
                                                    </section>
                                                    
                                                </div>
                                                <div>
                                                <p className="information-bold information-blue">Almoço</p>
                                                    <section>
                                                        <p className="information-bold">Entrou</p>
                                                        <p>{pointday[1]?.timestring.slice(11, 16)}</p>
                                                    </section>
                                                
                                                <section>
                                                        <p className="information-bold">Saiu</p>
                                                        <p>{pointday[2]?.timestring.slice(11, 16)}</p>
                                                </section>
                                                    
                                                </div>
                                        </li>
                                    )): <div>sem pontos cadastrados</div>}

                                    
                                    
                                </ul>
                            </div>
                        </div>

                </section>
                

            </body>
        </div>
    )
}