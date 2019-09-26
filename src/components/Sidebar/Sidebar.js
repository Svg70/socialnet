
import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (<div className={s.sidebar}>
        <nav>
            <div className={s.item}>
                <NavLink to="/Dialogs" className={s.activeLink}>Messages</NavLink>
                {/* -save не срвзу */}
            </div>
            <div className={s.item}>
                <NavLink to='/Content'className={s.activeLink}>My page</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Friends'className={s.activeLink}>Friends</NavLink>
            </div>
            
            <div className={s.item}>
                <NavLink to='/Users'className={s.activeLink}>Users</NavLink>
            </div>
        </nav>
    </div>);
}

export default Sidebar