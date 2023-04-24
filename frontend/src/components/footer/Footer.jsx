import './Footer.scss'
import {Logo} from "../logo/Logo.jsx"
import {Link} from "react-router-dom";
import {BsFacebook, BsInstagram} from "react-icons/bs";
import {TfiYoutube} from "react-icons/tfi";

export const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <Logo/>
                <div className='footer__social'>
                    <a href='#' className='footer_social__item'><BsInstagram className='social-icon'/></a>
                    <a href='#' className='footer_social__item'><BsFacebook className='social-icon'/></a>
                    <a href='#' className='footer_social__item'><TfiYoutube className='social-icon'/></a>
                </div>
            </div>
            <ul className='list-footer'>
                <li><Link to='' className='link-footer'>Компанія</Link></li>
                <li><Link to='' className='link-footer'>Компанія</Link></li>
                <li><Link to='' className='link-footer'>Лабораторія</Link></li>
            </ul>
            <ul className='list-footer'>
                <li><Link to='' className='link-footer'>Мед акація</Link></li>
                <li><Link to='' className='link-footer'>Мед гречка</Link></li>
                <li><Link to='' className='link-footer'>Мед липа</Link></li>
            </ul>

            <ul className='list-footer'>
                <li><Link to='' className='link-footer'>Доставка і оплата</Link></li>
                <li><Link to='' className='link-footer'>Статті</Link></li>
                <li><Link to='' className='link-footer'>Відгуки</Link></li>
            </ul>
            <div>
                <p className='white-text'>Контакти:</p>
                <ul>
                    <li className='white-text'>buckfast@gmail.com</li>
                    <li className='white-text'>тел.: +38012345678</li>
                    <li className='white-text'>Київ, вулиця Київська, 1</li>
                </ul>
                <div className='follow-us-block'>
                    <p className='white-text' >Підпишіться на наші новини</p>
                    <input
                        type='email'
                        className='follow__input'
                        placeholder='Уведіть ваш email'
                    />
                    <button className='follow-us__button-send'>></button>
                </div>
            </div>
        </div>
    )
}