import {IoMdNotificationsOutline, IoMdMenu} from 'react-icons/io';
import {BsGrid} from 'react-icons/bs';
import './styles.css';
import profile from '../../assets/perfil.png';
import Drawer from '../Drawer/Drawer';
import { useState } from 'react';

export default function Bar() {
    const [modal, setModal] = useState(false);

    return(
        <div>
            <div className="bar">
                <IoMdMenu cursor="pointer" onClick={() => setModal(!modal)} fontSize="4vh"/>
                <section>
                    <div>
                        <IoMdNotificationsOutline />
                        <p>3</p>
                    </div>
                    <section className="icon-bar">
                        <BsGrid/>
                    </section>
                    
                    <p className="userName">Vladimir Costa</p> 
    
                    <img src={profile} alt=""/>

                </section>
            </div>
            {
                modal ? <Drawer /> : false
            }
            
        </div>
    );
}