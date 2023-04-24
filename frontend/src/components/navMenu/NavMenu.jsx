import {useState} from "react"
import {NavMenuItem} from "./NavMenuItem"
import './NavMenu.scss'
import {NavLink} from "react-router-dom"
import {MdKeyboardArrowDown} from "react-icons/md"

export const NavMenu = () => {
    const [menuItems] = useState([
        {
            main: 'Магазин', subsections:
                [{text: 'Мед натуральний та органічний'},
                    {text: 'Мед натуральний та органічний'},
                    {text: 'Мед натуральний та органічний'}]
        },
        {
            main: 'Про нас', subsections:
                [{text: 'Мед натуральний та органічний'},
                    {text: 'Мед натуральний та органічний'},
                    {text: 'Мед натуральний та органічний'}]
        },
        {
            main: 'Відгуки', subsections:
                [{text: 'Мед натуральний та органічний'},
                    {text: 'Мед натуральний та органічний'},
                    {text: 'Мед натуральний та органічний'}]
        }
    ]);
    return (
        <ul className='nav-menu'>
            {
                menuItems.map((item, index) => {
                    return <NavMenuItem menuItem={item} key={index}/>
                })
            }
            <li className='nav-menu__item'>
                <NavLink to='' className='nav-menu__item-link'>
                    Статті
                    <MdKeyboardArrowDown className='nav-menu__item-icon'/>
                </NavLink>
            </li>
            <li className='nav-menu__item'>
                <NavLink to='' className='nav-menu__item-link'>
                    Контакти
                    <MdKeyboardArrowDown className='nav-menu__item-icon'/>
                </NavLink>
            </li>
        </ul>
    )
}