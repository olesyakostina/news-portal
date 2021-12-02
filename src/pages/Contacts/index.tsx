import React from "react";
import './styles.scss'
import routeMain from './routes'
import OlesyaImg from 'assets/img/1.jpg'


const Contacts =()=>(
    <section className='contactsPage'>
        <div className ='info'>
            <div className ='phone'>
                <a href='tel:+996755050543'>+(996) 755 05 05 43</a>
            </div>
            <div className ='name'>
                Olesya <br/> Kostina
            </div>
            <div className ='mail'>
                <a href='mailto:olesyakostina1604@gmail.com'>olesyakostina1604@gmail.com</a>
            </div>
            <div className ='position'>
                FrontEnd Developer
            </div>
            <div className ='technjlogies'>
               HTML CSS JS
            </div>
        </div>
        <div className ='image'>
            <img src={OlesyaImg} alt={OlesyaImg}/>
        </div>

    </section>
)
export {routeMain }
export default Contacts