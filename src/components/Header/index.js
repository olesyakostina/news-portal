import React from "react";
import './styles.scss'
import { NavLink } from "react-router-dom";

import {routeMain as routeMainPage} from 'pages/MainPage';
import {routeMain as routeNewsListPages} from 'pages/NewsListPage';
import {routeMain as routeContacts} from 'pages/Contacts';

const Header =()=>{
    return (
        <header className='mainHeader'>
           <div className='title'>Новостник</div>
           <nav>
               <NavLink to={routeMainPage()} activeClassName={'linkActive'}>Главная</NavLink>
               <NavLink to={routeNewsListPages()} activeClassName={'linkActive'}>Новости</NavLink>
               <NavLink to={routeContacts()} activeClassName={'linkActive'}>Контакты</NavLink>
           </nav>
        </header>
    )
}
export default Header