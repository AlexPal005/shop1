import {Link} from "react-router-dom";

export const DropDownMenu = ({menuItems}) => {
    return (
        <ul className='drop-down-menu__list'>
            {menuItems.map((item, index) => {
                return (
                    <li key={index} className='drop-down-menu__item'>
                        <Link to={item.link} className='drop-down-menu__link'>
                            {item.text}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
