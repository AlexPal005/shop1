import {useState} from "react"
import {NavMenuItem} from "./NavMenuItem"
import './NavMenu.scss'

export const NavMenu = () => {
    const [menuItems] = useState([
        {main: 'Магазин'},
        {main: 'Про нас'},
        {main: 'Відгуки'},
        {main: 'Статті'},
        {main: 'Контакти'},
    ]);
    return (
        <ul className='nav-menu'>
            {
                menuItems.map((item, index) => {
                    return <NavMenuItem menuItem={item} key={index}/>
                })
            }
        </ul>
    )
}