import './NavMenuIsons.scss'
import {FiHeart, FiSearch} from "react-icons/fi";
import {RiAccountCircleLine, RiShoppingCartLine} from "react-icons/ri";
import {useState} from "react";
import {RegisterForm} from "../RegisterForm/RegisterForm.jsx";

export const NavMenuIcons = () => {
    const [isClickedAccountIcon, setIsClickedAccountIcon] = useState(false);

    return (
        <div className='nav-menu-icons'>
            <FiSearch className='nav-menu-icons__item-basic'/>
            <FiHeart className='nav-menu-icons__item-basic'/>
            <RiShoppingCartLine className='nav-menu-icons__item-basic'/>
            <RiAccountCircleLine
                name='account'
                className='nav-menu-icons__item-basic'
                onClick={() => {
                    setIsClickedAccountIcon(prev => !prev)
                }}
            />
            {
                isClickedAccountIcon &&
                <RegisterForm/>
            }
        </div>
    )
}