import {NavLink} from "react-router-dom"
import './NavMenuItem.scss'
import {MdKeyboardArrowDown} from "react-icons/md";

export const NavMenuItem = ({menuItem}) => {
    return (
        <li className='nav-menu__item'>
            <NavLink to='' className='nav-menu__item-link'>
                {menuItem.main}
                <MdKeyboardArrowDown className='nav-menu__item-icon'/>
            </NavLink>
        </li>
    )
}