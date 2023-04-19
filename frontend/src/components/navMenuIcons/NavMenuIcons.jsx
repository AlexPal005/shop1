import './NavMenuIsons.scss'
import {FiHeart, FiSearch} from "react-icons/fi";
import {RiAccountCircleLine, RiShoppingCartLine} from "react-icons/ri";

export const NavMenuIcons = () => {
    return (
        <div className='nav-menu-icons'>
            <FiSearch  className='nav-menu-icons__item-basic'/>
            <FiHeart className='nav-menu-icons__item-basic'/>
            <RiShoppingCartLine className='nav-menu-icons__item-basic'/>
            <RiAccountCircleLine className='nav-menu-icons__item-basic'/>
        </div>
    )
}