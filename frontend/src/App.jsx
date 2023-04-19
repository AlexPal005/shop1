import './App.scss'
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/header/Header.jsx"
import {Footer} from "./components/footer/Footer.jsx"

function App() {

    return (
        <div className='app'>
            <Header/>
            <Routes>
                <Route></Route>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App
