import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function Router(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                {/* <Route path="/about" exact element={<AboutUs />}></Route>
                <Route path="/pricing" exact element={<Pricing />}></Route>
                <Route path="/contact" exact element={<Contact />}></Route> */}
            </Routes>
        </BrowserRouter>
    )
}