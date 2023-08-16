import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Classes from "../pages/Classes";
import Contact from "../pages/Contact";

export default function Router(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/about" exact element={<About />}></Route>
                <Route path="/classes" exact element={<Classes />}></Route>
                <Route path="/contact" exact element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
    )
}