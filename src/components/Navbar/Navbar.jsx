import React from "react";
import set from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    const activeLink = ({isActive}) => isActive ? `${set.active} ${set.navListLink}` : set.navListLink;

    return (
        <nav className={set.nav}>
            <div className={set.item}>
                <NavLink className={activeLink} to="/">Profile</NavLink>
            </div>
            <div className={set.item}>
                <NavLink className={activeLink} to="/dialogs">Messages</NavLink>
            </div>
            <div className={set.item}>
                <NavLink className={activeLink} to="/news">News</NavLink>
            </div>
            <div className={set.item}>
                <NavLink className={activeLink} to="/music">Music</NavLink>
            </div>
            <div className={set.item}>
                <NavLink className={activeLink} to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;

// отличный курс, сложное становится понятным)) Версии меняются, но это только помогает закреплять материал. У меня NavLink такой получился:
//     <NavLink className={({isActive}) => isActive ? `${s.active} ${s.navListLink}` : s.navListLink}
//              to="/profile">Profile</NavLink>
//
//         `${s.active} ${s.navListLink}` - шаблонная строка с составным селектором, что бы применялись значения двух классов


// import React from "react";
// import set from './Navbar.module.css';
// import {NavLink} from "react-router-dom";
//
// const ActiveLink = ({isActive}) => isActive ? set.active : set.item;
//
// const Navbar = () => {
//
//
//
//     return (
//         <nav className={set.nav}>
//             <div className={set.item}>
//                 <NavLink to='/profile' className={ActiveLink}>Profile</NavLink>
//             </div>
//             <div className={set.item}>
//                 <NavLink to='/dialogs' сlassName={ActiveLink}>Massages</NavLink>
//             </div>
//             <div className={set.item}>
//                 <NavLink to='/news' сlassName={ActiveLink}>News</NavLink>
//             </div>
//             <div className={set.item}>
//                 <NavLink to='/music' сlassName={ActiveLink}>Music</NavLink>
//             </div>
//             <div className={set.item}>
//                 <NavLink to='/settings' сlassName={ActiveLink}>Settings</NavLink>
//             </div>
//         </nav>
//     )
// }
//
// export default Navbar;