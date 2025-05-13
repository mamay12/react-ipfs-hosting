import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import {HashRouter, Route, Routes} from "react-router";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path='' index element={<App/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
        </HashRouter>
    </StrictMode>
)
