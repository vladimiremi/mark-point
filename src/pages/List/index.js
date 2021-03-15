import Bar from "../../components/Bar/Bar";
import Drawer from "../../components/Drawer/Drawer";
import './styles.css';
import profile from '../../assets/perfil.png';

export default function List() {



    return(
        <div className='list-container'>
            <Bar />
            <body className="body">
                <section>
                    <h2>Lista de colaboradores</h2>
                    <ul className="collaborator-list">
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