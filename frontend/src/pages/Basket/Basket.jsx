import {useEffect, useRef, useState} from "react"
import {CardBasketProduct} from "./CardBasketProduct"
import "./Basket.scss"
import axios from "axios";

export const Basket = () => {
    const [basketProducts, setBasketProducts] = useState([])
    const [resultSum, setResultSum] = useState(0)

    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [delivery, setDelivery] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");

    const refNovaPost = useRef(null);
    const refUkr = useRef(null);


    useEffect(() => {
        setBasketProducts(JSON.parse(localStorage.getItem('basket')))
    }, [])

    useEffect(() => {
        if (basketProducts) {
            basketProducts.forEach(product => {
                setResultSum(prevSum => prevSum + product.price)
            })
        }
    }, [basketProducts])

    const sendOrder = () => {
        if (refNovaPost.current.checked) {
            setDelivery("Нова пошта")
        } else {
            setDelivery("Укр пошта")
        }
        axios.post('http://localhost:8081/AddOrder',
            {
                surname: surname,
                name: name,
                phone: phone,
                email: email,
                delivery: delivery,
                city: city,
                address: address
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className='text-center mt-3 mb-3'>
                <h1>Оформлення замовлення</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <div className="card p-2">
                            <h3 className='card-title mx-auto'>Персональні дані</h3>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Прізвище</label>
                                    <input type="text" className="form-control"
                                           onChange={e => {
                                               setSurname(e.target.value)
                                           }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Ім'я</label>
                                    <input type="text" className="form-control"
                                           onChange={e => {
                                               setName(e.target.value)
                                           }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Телефон</label>
                                    <input type="text" className="form-control"
                                           onChange={e => {
                                               setPhone(e.target.value)
                                           }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control"
                                           onChange={e => {
                                               setEmail(e.target.value)
                                           }}
                                    />
                                </div>
                                <h4>Доставка</h4>
                                <div className="form-check">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="flexRadioDefault"
                                           ref={refNovaPost}
                                    />
                                    <label className="form-check-label">
                                        Нова Пошта
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                           ref={refUkr}
                                    />
                                    <label className="form-check-label">
                                        УкрПошта
                                    </label>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">Місто доставки</label>
                                    <input type="text" className="form-control"
                                           onChange={e => {
                                               setCity(e.target.value)
                                           }}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Адреса</label>
                                    <input type="text" className="form-control"
                                           onChange={e => {
                                               setAddress(e.target.value)
                                           }}/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className="card p-2">
                            <h3 className='card-title mx-auto mb-3'>Кошик</h3>
                            {
                                basketProducts ?
                                    <>
                                        {
                                            basketProducts.map(product => {
                                                return (
                                                    <CardBasketProduct product={product} key={product.productId}/>
                                                )
                                            })
                                        }
                                    </> :
                                    <div>В кошику немає товарів</div>

                            }
                            {
                                basketProducts &&
                                <p>Вартість: {resultSum} грн</p>
                            }
                        </div>
                        <div className='text-center mt-3'>
                            <button
                                type="submit"
                                className="btn btn-warning"
                                onClick={sendOrder}
                            >Оформити
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}