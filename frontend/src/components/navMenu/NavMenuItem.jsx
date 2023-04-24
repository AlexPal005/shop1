import {NavLink} from "react-router-dom"
import './NavMenuItem.scss'
import {MdKeyboardArrowDown} from "react-icons/md";
import {DropDownMenu} from "../DropDownMenu/DropDownMenu.jsx";
import {useState} from "react";

export const NavMenuItem = ({menuItem}) => {
    const [isClicked, setIsClicked] = useState(false);
    const showMenu = () => {
        setIsClicked(prev => !prev);
    }

    return (
        <li className='nav-menu__item'  onMouseOver={showMenu} onMouseOut={showMenu}>
            <NavLink to='' className='nav-menu__item-link'>
                {menuItem.main}
                <MdKeyboardArrowDown className='nav-menu__item-icon'/>
            </NavLink>
            {
                isClicked &&
                <div className='drop-down-menu'>
                    <div className='drop-down__inner'>
                        <div className='drop-down-menu__title'>{menuItem.main}</div>
                        <DropDownMenu menuItems={menuItem.subsections}/>
                    </div>
                </div>
            }
        </li>
    )
}