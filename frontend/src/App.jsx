import './App.scss'
import {Route, Routes} from "react-router-dom"
import {Header} from "./components/header/Header.jsx"
import {Footer} from "./components/footer/Footer.jsx"
import {HoneyPage} from "./pages/HoneyPage/HoneyPage";
import {Basket} from "./pages/Basket/Basket";
import {useKeycloak} from "@react-keycloak/web";
import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import {AdminPage} from "./pages/AdminPage/AdminPage";
import {AddProduct} from "./pages/AdminPage/AddProduct";

function App() {
    const {keycloak} = useKeycloak()
    const [roles, setRoles] = useState([])

    useEffect(() => {
        //decode jwt token
        if (keycloak.token) {
            const decoded = jwt_decode(keycloak.token)
            setRoles(decoded.realm_access.roles)
        }
    }, [keycloak.token]);

    return (
        <div className='app'>
            <Header/>
            <div className='content-main'>
                <Routes>
                    <Route path='/' element={<div>main</div>}/>
                    <Route path='/honey' element={<HoneyPage/>}/>
                    <Route path='/basket' element={<Basket/>}/>
                    {
                        roles.includes('admin') &&
                        <>
                            <Route path='admin/*' element={<AdminPage/>}/>
                            <Route path='admin/addProduct' element={<AddProduct/>}/>
                        </>

                    }
                    <Route path="*" component={<div>main</div>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App
