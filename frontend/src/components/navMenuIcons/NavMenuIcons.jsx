import './NavMenuIsons.scss'
import {FiHeart, FiSearch} from "react-icons/fi"
import {RiShoppingCartLine} from "react-icons/ri"
import {useCallback, useEffect, useState} from "react"
import {useKeycloak} from "@react-keycloak/web"
import {Link} from "react-router-dom";

export const NavMenuIcons = () => {
    const {keycloak} = useKeycloak()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        setIsLoggedIn(keycloak.authenticated)
    }, [keycloak.authenticated])

    const logIn = useCallback(() => {
        keycloak.login()
    }, [keycloak])

    const logOut = useCallback(() => {
        keycloak.logout({redirectUri: 'http://localhost:5173/'})
    }, [keycloak])

    useEffect(() => {
        console.log(isLoggedIn)
    }, [isLoggedIn])

    return (
        <div className='nav-menu-icons'>
            <FiSearch className='nav-menu-icons__item-basic'/>
            <FiHeart className='nav-menu-icons__item-basic'/>
            <Link to='/basket' className='nav-menu-icons__item-basic'>
                <RiShoppingCartLine className='nav-menu__icon'/>
            </Link>
            {
                isLoggedIn ?
                    <span
                        className='nav-menu-icons__item-basic text-logIn'
                        onClick={logOut}

                    >Вийти</span> :
                    <span
                        className='nav-menu-icons__item-basic text-logIn'
                        onClick={logIn}
                    >Увійти</span>
            }
        </div>
    )
}