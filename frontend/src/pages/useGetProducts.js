import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {useKeycloak} from "@react-keycloak/web";

export const useGetProducts = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState([])
    const {keycloak} = useKeycloak()

    // get products from db
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
    }, [keycloak.token])

    useEffect(() => {
        getProducts()
    }, [keycloak.token])

    return [isLoading, products]
}