import {useGetProducts} from "../useGetProducts.js"
import './AdminPage.scss'
import {AiTwotoneDelete} from "react-icons/ai";
import {Link} from "react-router-dom";


export const AdminPage = () => {
    const [isLoading, products] = useGetProducts()
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
                                return (<Card product={product} key={product.productId}/>)
                            })
                        }
                    </div>
            }

        </div>
    )
}

const Card = ({product}) => {
    return (
        <div className='card card-admin p-2'>
            <img
                src={`data:image/jpeg;charset=utf-8;base64, ${product.image}`}
                alt="honey"
                className='img-fluid img-product-admin'
            />
            <h5>{product.productName}</h5>
            <h5>{product.price} грн</h5>
            <AiTwotoneDelete className='delete-button-admin'/>
        </div>
    )
}