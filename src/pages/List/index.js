import Bar from "../../components/Bar/Bar";
import './styles.css';
import profile from '../../assets/perfil.png';
import { useHistory } from "react-router";
import api from '../../services/api';
import { useEffect, useState } from "react";

export default function List() {
    const history = useHistory();
    const id_admin = localStorage.getItem('id_admin');

    const [listCollaborator, setListCollaborator] = useState([]);

    function handleList (id) {
        // e.preventDefault();
        history.push(`/collaborator`);
        localStorage.setItem('idInfCollaborator', id); 
        
      }

      useEffect(()=>{
          try{
            api.get('list-collaborator', {
                headers: {
                    Authorization: id_admin,
                },
            }).then( response => {
                setListCollaborator(response.data);
                console.log(response.data)
            } )
          }catch(err){
              alert("Não foi possível exibir os dados "+ err);
          }
      },[id_admin])

    return(
        
        <div className='list-container'>
            <Bar />
            <body className="body">
                <section>
                        <h2>Lista de colaboradores</h2>
                        <ul className="collaborator-list">
                            {
                                listCollaborator.map(collaborator => (
                                    <li onClick={() => handleList(collaborator.id)} key={collaborator.id}>
                                        <img src={profile} alt=""/>
                                        <p>{collaborator.name}</p>
                                    </li>
                                ))
                            }
                            
                        </ul>

                </section>
                

            </body>
        </div>
    )
}