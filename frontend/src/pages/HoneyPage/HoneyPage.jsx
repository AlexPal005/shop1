import {useCallback, useEffect, useState} from "react"
import axios from "axios"
import {Card} from "./Card.jsx"
import './HoneyPage.scss'
import {useKeycloak} from "@react-keycloak/web";

export const HoneyPage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {keycloak} = useKeycloak()

    // get products from bd
    const getProducts = useCallback(() => {
        setIsLoading(true)
        axios.get('http://localhost:8081/GetProducts', {params: {token: keycloak.token}})
            .then(response => {
                setProducts(response.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [])

    // perform getting products
    useEffect(() => {
        getProducts()
    }, [keycloak.token])

    return (
        <div className='container'>
            {
                isLoading ? <div>Loading...</div> :
                    <div className='row row-cols-3'>
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