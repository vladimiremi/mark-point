import { IoMdMenu, IoMdPersonAdd } from 'react-icons/io';
import './styles.css';

export default function Drawer() {
    return (
        <div className="drawer">
            <div className="icon-drawer">

                <IoMdMenu fontSize="6vh" color="rgb(0, 102, 240)"  />

                <p >Listagem de colaboradores</p>
            </div>
            <div className="icon-drawer">
                <IoMdPersonAdd fontSize="6vh" color="rgb(0, 102, 240)" />
                
                <p>Adicionar um colaborador</p>
            </div>
            
        </div>
    )
}