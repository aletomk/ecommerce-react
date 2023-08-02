import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "../components/layout/Layout";
import { NotFound } from "../components/pages/error/NotFound";
import { routes } from "./routes";

export const AppRouter = () => {

    const location = useLocation();
    
    useEffect( ()=> {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route element={<Layout />}>
            {
                routes.map( ({id, path, Element}) => <Route key={id} path={path} element={<Element />} /> )
            }
            </Route>
                <Route path="*" element={<NotFound />} />   
        </Routes>
    );
};

