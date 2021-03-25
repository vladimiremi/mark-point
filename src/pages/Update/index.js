import { IoMdCamera } from "react-icons/io";
import Bar from "../../components/Bar/Bar";
import './styles.css';
import api from '../../services/api';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

export default function Register() {
    const [name, setName] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [occupation, setOccupation] = useState();
    const [startexpedient, setStartexpedient] = useState();
    const [endtexpedient, setEndtexpedient] = useState();
    const [startlunch, setStartlunch] = useState();
    const [endlunch, setEndlunch] = useState();

    const id_admin = localStorage.getItem('id_admin');
    const idInfCollaborator = localStorage.getItem('idInfCollaborator');


    const [informationsColaborator, setInformationsColaborator] = useState()

    

    const history = useHistory();

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

        } catch(err){

        }
    }, []);

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            cpf,
            email,
            phone,
            occupation,
            startexpedient,
            endtexpedient,
            startlunch,
            endlunch
        };

        try {
            await api.put(`update-collaborator/${idInfCollaborator}`, data, {
                headers: {
                    Authorization: id_admin,
                }
            })
            history.push('/collaborator');

            alert("Colaborador cadastrado com sucesso!")
            setName('');
            setCpf('');
            setEmail('');
            setPhone('');
            setOccupation('');
            setStartexpedient('');
            setEndtexpedient('');
            setStartlunch('');
            setEndlunch('');


        }catch(err) {
            alert("Erro ao tentar atualizar colaborador, por favor tente novamente!" + err);
        }

        
    }

    function clearRegisters(e) {
        e.preventDefault();

        setName('');
        setCpf('');
        setEmail('');
        setPhone('');
        setOccupation('');
        setStartexpedient('');
        setEndtexpedient('');
        setStartlunch('');
        setEndlunch('');

        history.push('/collaborator');
    }

    return(
      <div className="register-container">
        <Bar />

        <body className="register-body">
                <section>
                        <div className="register-title">
                            <div>
                                <h2>Editar Colaborador</h2>
                                <section className="button">
                                    <button onClick={clearRegisters}>Cancelar</button>
                                    <button onClick={handleRegister}>Salvar</button>
                                </section>
                            </div>
                            
                        </div>
                        <form action="" onSubmit={handleRegister}>
                            <div className="content-register">
                                <div className="content-register__profile">
                                    
                                    <section >
                                        <div>
                                            <IoMdCamera />
                                        </div>
                                        <input 
                                            placeholder="Nome do colaborador"
                                            defaultValue={informationsColaborator?.name}
                                            onChange={ e =>setName(e.target.value) }
                                        />
                                    </section>
                                    <div className="content-register__informations">
                                        <p className="information-bold">Informações</p>
                                        <section className="content-register__informations-item">
                                            <section>
                                                <div>
                                                    <p className="information-bold">CPF</p>
                                                    <input
                                                        
                                                        defaultValue={informationsColaborator?.cpf}
                                                        onChange={ e =>setCpf(e.target.value) }
                                                        placeholder="Digite o CPF"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="information-bold">E-mail</p>
                                                    <input 
                                                        placeholder="Digite seu E-mail"
                                                        
                                                        defaultValue={informationsColaborator?.email}
                                                        onChange={ e =>setEmail(e.target.value) }
                                                    />
                                                </div>
                                                
                                                
                                            </section>

                                            <div>
                                                <p className="information-bold">Telefone</p>
                                                <input 
                                                    placeholder="(xx) xxxx-xxxx"
                                                    
                                                    defaultValue={informationsColaborator?.phone}
                                                    onChange={ e =>setPhone(e.target.value) }
                                                />
                                            </div>
                                            

                                        
                                        </section>

                                        <section className="content-register__informations-work">
                                            <section>
                                                <div>
                                                    <p className="information-bold information-blue">Ocupação</p>
                                                    <input 
                                                        placeholder="Ocupação do colaborador?"
                                                        
                                                        defaultValue={informationsColaborator?.occupation}
                                                        onChange={ e =>setOccupation(e.target.value) }
                                                    />
                                                </div>
                                                <div>
                                                    <p className="information-bold information-blue">Horário de Expediente</p>
                                                    <section>
                                                        <input 
                                                            placeholder="Horário de entrada"
                                                            
                                                            defaultValue={informationsColaborator?.startexpedient.slice(0, 5)}
                                                            onChange={ e =>setStartexpedient(e.target.value) }
                                                        />
                                                        <input 
                                                            placeholder="Horário de saída"
                                                            
                                                            defaultValue={informationsColaborator?.endtexpedient.slice(0, 5)}
                                                            onChange={ e =>setEndtexpedient(e.target.value) }
                                                        />
                                                    </section>
                                                    
                                                </div>
                                            </section>
                                            <div>
                                                    <p className="information-bold information-blue">Horário de almoço</p>
                                                    <section>
                                                        <input 
                                                            placeholder="Horário de entrada"
                                                            
                                                            defaultValue={informationsColaborator?.startlunch.slice(0, 5)}
                                                            onChange={ e =>setStartlunch(e.target.value) }
                                                        />
                                                        <input 
                                                            placeholder="Horário de saída"
                                                            
                                                            defaultValue={informationsColaborator?.endlunch.slice(0, 5)}
                                                            onChange={ e =>setEndlunch(e.target.value) }
                                                        />
                                                    </section>
                                                    
                                                </div>
                                        </section>
                                    </div>
                                    
                                </div>
                            </div>
                        </form>
                </section>
                

            </body>
      </div>
    );
};