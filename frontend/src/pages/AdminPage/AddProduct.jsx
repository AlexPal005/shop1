import {useState} from "react";
import axios from "axios";
import {useKeycloak} from "@react-keycloak/web";

export const AddProduct = () => {
    const [file, setFile] = useState("");
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const {keycloak} = useKeycloak()
    const [res, setRes] = useState("")

    function getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    function handleChangeFile(e) {
        getBase64(e.target.files[0], (res) => {
           res = res.slice(21, res.length - 1)
            setFile(res)
        })
    }

    const sendProduct = (e) => {
        e.preventDefault()
        setRes("")
        axios.post('http://localhost:8081/AddProductAdmin', {
                image: file,
                productName: productName,
                description: description,
                price: price
            },
            {
                headers: {
                    token: keycloak.token
                }
            }
        )
            .then(res => {
                console.log(res)
                setRes('Успішно додано!')
            })
            .catch(err => {
                console.log(err)
                setRes('Помилка! ' + err.message)
            })
    }

    return (
        <div className='container mx-auto main-admin'>
            <form
                style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <div className="mb-3 text-center">
                    <label className="form-label">Зображення</label>
                    <input type="file" onChange={handleChangeFile} className='form-control'/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Назва товару' className="form-control"
                           onChange={(e) => {
                               setProductName(e.target.value)
                           }}/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Опис' className="form-control"
                           onChange={(e) => {
                               setDescription(e.target.value)
                           }}
                    />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Ціна' className="form-control"
                           onChange={(e) => {
                               setPrice(Number(e.target.value))
                           }}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={sendProduct}
                >Додати
                </button>
                {
                    res &&
                    <p style={{color: 'red'}}>{res}</p>
                }
            </form>
        </div>
    )
}