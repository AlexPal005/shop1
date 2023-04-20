import './App.scss'
import {Route, Routes} from "react-router-dom"
import {Header} from "./components/header/Header.jsx"
import {Footer} from "./components/footer/Footer.jsx"

function App() {

    return (
        <div className='app'>
            <Header/>
            <div className='content-main'>
                привіт
                <Routes>
                    <Route></Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App
