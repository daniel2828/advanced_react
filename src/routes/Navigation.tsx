import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages/index";
import logo from "../logo.svg";
import "./Navigation.css";
import { routes } from "./routes";
export const Navigation = () => {
  return (
    <Suspense fallback={null}>
    <BrowserRouter>
      <div className="main-layout">
       
        <ul>
          {routes.map((route) => (
            <li key={route.to}>
              <NavLink
                className={({ isActive }: any) =>
                  isActive ? "nav-active" : ""
                }
                to={route.to}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Routes>
          {routes.map((route)=>{
            console.log("route", route);
            return(
            <Route key={route.path} path={route.to} element={<route.Component />} />
          )})}
          
         
          
        </Routes>
      </div>
    </BrowserRouter>
    </Suspense>
  );
};
