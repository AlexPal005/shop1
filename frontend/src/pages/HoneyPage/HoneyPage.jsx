import {useCallback, useEffect, useState} from "react"
import axios from "axios"
import {Card} from "./Card.jsx"
import './HoneyPage.scss'

export const HoneyPage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // get products from bd
    const getProducts = useCallback(() => {
        setIsLoading(true)
        axios.get('http://localhost:8081/GetProducts')
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
    }, [])

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <div className='container'>
            {
                isLoading ? <div>Loading...</div> :
                    <div className='row row-cols-3'>
                        {
                            products.length &&
                            products.map((product, index) => {
                                return (<Card product={product}/>)
                            })
                        }
                    </div>
            }
        </div>
    )
}