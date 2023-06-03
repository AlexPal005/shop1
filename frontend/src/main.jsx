import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import {ReactKeycloakProvider} from "@react-keycloak/web"
import keycloak from "./keycloak.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReactKeycloakProvider authClient={keycloak}>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </ReactKeycloakProvider>
)
