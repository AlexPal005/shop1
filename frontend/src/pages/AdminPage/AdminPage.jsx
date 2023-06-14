import {useGetProducts} from "../useGetProducts.js"
import './AdminPage.scss'
import {AiTwotoneDelete} from "react-icons/ai"
import {Link} from "react-router-dom"
import axios from "axios"
import {useKeycloak} from "@react-keycloak/web";


export const AdminPage = () => {
    const [isLoading, products, setUpdate] = useGetProducts()
    return (
        <div className='container main-admin mx-auto'>
            <Link to='/admin/addProduct' className='link-add-product'>
                <h4>Додати товар</h4>
            </Link>
            {
                isLoading ? <div>Loading...</div> :
                    <div>
                        {
                            products.length &&
                            products.map((product) => {
                                return (<Card product={product}
                                              key={product.productId}
                                              setUpdate={setUpdate}
                                />)
                            })
                        }
                    </div>
            }

        </div>
    )
}

const Card = ({product, setUpdate}) => {
    const {keycloak} = useKeycloak()
    const deleteProduct = (e) => {
        e.preventDefault()
        axios.get('http://localhost:8081/DeleteProductById', {
            params: {
                productId: product.productId,
            },
            headers: {token: keycloak.token}
        })
            .then(res => {
                console.log(res)
                setUpdate(prev => prev + 1)
            })
            .catch(err => {
                console.log(err)
                setUpdate(prev => prev + 1)
            })
    }
    return (
        <div className='card card-admin p-2'>
            <img
                src={`data:image/jpeg;charset=utf-8;base64, ${product.image}`}
                alt="honey"
                className='img-fluid img-product-admin'
            />
            <h5>{product.productName}</h5>
            <h5>{product.price} грн</h5>
            <AiTwotoneDelete className='delete-button-admin'
                             onClick={deleteProduct}
            />
        </div>
    )
}