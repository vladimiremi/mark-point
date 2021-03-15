import {IoMdNotificationsOutline, IoMdMenu, IoMdApps } from 'react-icons/io';
import './styles.css';
import profile from '../../assets/perfil.png';
import Drawer from '../Drawer/Drawer';
import { useState } from 'react';

export default function Bar() {
    const [modal, setModal] = useState(false);

    return(
        <div>
            <div className="bar">
                <IoMdMenu onClick={() => setModal(!modal)} fontSize="4vh"/>
                <section>
                    <div>
                        <IoMdNotificationsOutline />
                        <p>3</p>
                    </div>
                    <IoMdApps />
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