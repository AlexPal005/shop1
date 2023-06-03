import './NavMenuIsons.scss'
import {FiHeart, FiSearch} from "react-icons/fi";
import {RiAccountCircleLine, RiShoppingCartLine} from "react-icons/ri";
import {useEffect, useState} from "react";
import {useKeycloak} from "@react-keycloak/web";

export const NavMenuIcons = () => {
    const {keycloak, initialized} = useKeycloak()
    useEffect(() => {
        console.log(keycloak.authenticated)
    }, [])


    return (
        <div className='nav-menu-icons'>
            <FiSearch className='nav-menu-icons__item-basic'/>
            <FiHeart className='nav-menu-icons__item-basic'/>
            <RiShoppingCartLine className='nav-menu-icons__item-basic'/>
            <RiAccountCircleLine
                name='account'
                className='nav-menu-icons__item-basic'
                onClick={() => {
                    keycloak.login()
                }}
            />
        </div>
    )
}