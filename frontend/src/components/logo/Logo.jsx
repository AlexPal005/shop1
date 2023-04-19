import logo from './../../media/logo-main.png'
import './Logo.scss'
import {Link} from "react-router-dom"

export const Logo = () => {
    return (
        <Link to=''>
            <img src={logo} alt='buckfast' className='logo'/>
        </Link>
    )
}