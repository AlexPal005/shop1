import './App.scss'
import {Route, Routes} from "react-router-dom"
import {Header} from "./components/header/Header.jsx"
import {Footer} from "./components/footer/Footer.jsx"
import {HoneyPage} from "./pages/HoneyPage/HoneyPage";
import {Basket} from "./pages/Basket/Basket";

function App() {

    return (
        <div className='app'>
            <Header/>
            <div className='content-main'>
                <Routes>
                    <Route path='/' element={<div>main</div>}/>
                    <Route path='/honey' element={<HoneyPage/>}/>
                    <Route path='/basket' element={<Basket/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App
