import {Card} from "./Card.jsx"
import './HoneyPage.scss'
import {useGetProducts} from "../useGetProducts.js";
import {useState} from "react";

export const HoneyPage = () => {
    const [isLoading, products] = useGetProducts()

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