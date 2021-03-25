import { IoMdMenu, IoMdPersonAdd } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import './styles.css';

export default function Drawer() {
    const history = useHistory();

    function handleDrawer () {
        // e.preventDefault();
        history.push('/register');
        
      }
    
    function handleList () {
        // e.preventDefault();
        history.push('/list');
        
      }

    return (
        <div className="drawer">
            <div className="icon-drawer" onClick={handleList}>

                <IoMdMenu fontSize="6vh" color="rgb(0, 102, 240)"  />

                <p >Listagem de colaboradores</p>
            </div>
            <div className="icon-drawer" onClick={handleDrawer}>
                <IoMdPersonAdd fontSize="6vh" color="rgb(0, 102, 240)" />
                
                <p>Adicionar um colaborador</p>
            </div>
            
        </div>
    )
}