import './Header.scss'
import {Logo} from "../logo/Logo.jsx"
import {NavMenu} from "../navMenu/NavMenu"
import {NavMenuIcons} from "../navMenuIcons/NavMenuIcons";

export const Header = () => {
    return (
        <header className='header'>
            <Logo/>
            <NavMenu/>
            <NavMenuIcons/>
        </header>
    )
}