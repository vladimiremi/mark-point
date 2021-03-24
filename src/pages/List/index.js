import Bar from "../../components/Bar/Bar";
import './styles.css';
import profile from '../../assets/perfil.png';
import { useHistory } from "react-router";

export default function List() {

    const history = useHistory();

    function handleList () {
        // e.preventDefault();
        history.push('/collaborator');
        
      }

    return(
        
        <div className='list-container'>
            <Bar />
            <body className="body">
                <section>
                        <h2>Lista de colaboradores</h2>
                        <ul className="collaborator-list">
                            <li onClick={handleList}>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            <li>
                                <img src={profile} alt=""/>
                                <p>Vladimir Costa</p>
                            </li>
                            
                        </ul>

                </section>
                

            </body>
        </div>
    )
}