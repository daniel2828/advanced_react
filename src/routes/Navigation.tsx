import {BrowserRouter, NavLink, Routes,Route, Navigate} from "react-router-dom";
import logo from "../logo.svg";
import { ShoppingPage } from "./02-component-patterns/pages/ShoppingPage";
import "./Navigation.css";
export const Navigation = ()=>{
return(
    <BrowserRouter>
        <div className="main-layout">
           
            <ul>
                <li>
                    <NavLink  to ="/shopping">ShoppingPage</NavLink>
                </li>
                <li>
                    <NavLink to ="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to ="/home">Home</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="about" element={<h1>About page</h1>}/>
                <Route path="home" element={<h1>Home page</h1>}/>
                <Route path="shopping" element={<ShoppingPage/>}/>
                <Route path="/*" element={<Navigate to="/home" replace/>}  />
            </Routes>
        </div>
        

    </BrowserRouter>
)
}