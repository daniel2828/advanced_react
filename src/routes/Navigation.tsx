import {BrowserRouter, NavLink, Routes,Route, Navigate} from "react-router-dom";
import logo from "../logo.svg";
import "./Navigation.css";
export const Navigation = ()=>{
return(
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src ={logo} alt="react logo"></img>
            </nav>
            <ul>
                <li>
                    <NavLink  className ={({isActive}:any)=>isActive?'nav-active':''} to ="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to ="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to ="/users">Users</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="about" element={<h1>About page</h1>}/>
                <Route path="users" element={<h1>Users page</h1>}/>
                <Route path="home" element={<h1>Home page</h1>}/>
                <Route path="/*" element={<Navigate to="/home" replace/>}  />
            </Routes>
        </div>
        

    </BrowserRouter>
)
}