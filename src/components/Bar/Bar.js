import {IoMdNotificationsOutline, IoMdMenu, IoMdApps } from 'react-icons/io';
import './styles.css';
export default function Bar() {
    return(
        <div>
            <div className="bar">
                <IoMdMenu fontSize="4vh"/>
                <section>
                    <div>
                        <IoMdNotificationsOutline />
                        <p>3</p>
                    </div>
                    <IoMdApps />
                    <p className="userName">Vladimir Costa</p> 
    
                    <img src="https://github.com/vladimiremi.png" alt=""/>

                </section>
            </div>
        </div>
    );
}