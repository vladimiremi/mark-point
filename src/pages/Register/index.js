import { IoMdCamera } from "react-icons/io";
import Bar from "../../components/Bar/Bar";
import './styles.css';
import api from '../../services/api';
import { useState } from "react";

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
            const sucsessRegister = await api.post('register-collaborator', data, {
                headers: {
                    Authorization: id_admin,
                }
            });

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
            alert("Erro ao tentar registrar, por favor tente novamente!" + err);
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
    }

    return(
      <div className="register-container">
        <Bar />

        <body className="register-body">
                <section>
                        <div className="register-title">
                            <div>
                                <h2>Adicionar Colaborador</h2>
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
                                            value={name}
                                            onChange={ e =>setName(e.target.value) }
                                        />
                                    </section>
                                    <div className="content-register__informations">
                                        <p className="information-bold">Informa????es</p>
                                        <section className="content-register__informations-item">
                                            <section>
                                                <div>
                                                    <p className="information-bold">CPF</p>
                                                    <input
                                                        value={cpf}
                                                        onChange={ e =>setCpf(e.target.value) }
                                                        placeholder="Digite o CPF"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="information-bold">E-mail</p>
                                                    <input 
                                                        placeholder="Digite seu E-mail"
                                                        value={email}
                                                        onChange={ e =>setEmail(e.target.value) }
                                                    />
                                                </div>
                                                
                                                
                                            </section>

                                            <div>
                                                <p className="information-bold">Telefone</p>
                                                <input 
                                                    placeholder="(xx) xxxx-xxxx"
                                                    value={phone}
                                                    onChange={ e =>setPhone(e.target.value) }
                                                />
                                            </div>
                                            

                                        
                                        </section>

                                        <section className="content-register__informations-work">
                                            <section>
                                                <div>
                                                    <p className="information-bold information-blue">Ocupa????o</p>
                                                    <input 
                                                        placeholder="Ocupa????o do colaborador?"
                                                        value={occupation}
                                                        onChange={ e =>setOccupation(e.target.value) }
                                                    />
                                                </div>
                                                <div>
                                                    <p className="information-bold information-blue">Hor??rio de Expediente</p>
                                                    <section>
                                                        <input 
                                                            placeholder="Hor??rio de entrada"
                                                            value={startexpedient}
                                                            onChange={ e =>setStartexpedient(e.target.value) }
                                                        />
                                                        <input 
                                                            placeholder="Hor??rio de sa??da"
                                                            value={endtexpedient}
                                                            onChange={ e =>setEndtexpedient(e.target.value) }
                                                        />
                                                    </section>
                                                    
                                                </div>
                                            </section>
                                            <div>
                                                    <p className="information-bold information-blue">Hor??rio de almo??o</p>
                                                    <section>
                                                        <input 
                                                            placeholder="Hor??rio de entrada"
                                                            value={startlunch}
                                                            onChange={ e =>setStartlunch(e.target.value) }
                                                        />
                                                        <input 
                                                            placeholder="Hor??rio de sa??da"
                                                            value={endlunch}
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