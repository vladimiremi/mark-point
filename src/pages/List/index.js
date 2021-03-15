import Bar from "../../components/Bar/Bar";
import Drawer from "../../components/Drawer/Drawer";
import './styles.css';
export default function List() {
    return(
        <div className='list-container'>
            <Bar />
            <Drawer />
            <body className="body">
                <section>
                    <p>lista</p>
                    <ul>
                        <li>
                            Vladimir
                        </li>
                        <li>
                            Vladimir
                        </li>
                        <li>
                            Vladimir
                        </li>
                        <li>
                            Vladimir
                        </li>
                        <li>
                            Vladimir
                        </li>
                        <li>
                            Vladimir
                        </li>
                        <li>
                            Vladimir
                        </li>
                    </ul>

                </section>
                

            </body>
        </div>
    )
}