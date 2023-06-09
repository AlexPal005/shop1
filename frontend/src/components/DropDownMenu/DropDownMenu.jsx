import {Link} from "react-router-dom";

export const DropDownMenu = ({menuItems}) => {
    return (
        <div>
            {menuItems.map((item, index) => {
                return (
                    <Link to={item.link} key={index} className='drop-down-menu__link'>
                        <div className='drop-down-menu__item'>
                            {item.text}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
