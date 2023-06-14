import {useState} from "react";
import axios from "axios";

export const AddProduct = () => {
    const [file, setFile] = useState("");
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

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
            res = res.slice(23, res.length - 1)
            console.log(res)
            setFile(res)
        })
    }

    const sendProduct = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8081/AddProductAdmin', {
            file: file,
            productName: productName,
            description: description,
            price: price
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
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
            </form>
        </div>
    )
}