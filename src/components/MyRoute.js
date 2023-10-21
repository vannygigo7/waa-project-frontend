import {useRoutes} from "react-router-dom";
import NoMatchRoute from "./NoMatchRoute";
import LandingPage from "./LandingPage";
import ProductList from "../features/product/ProductList";
import ProductUpdate from "../features/product/ProductUpdate";
import ProductAdd from "../features/product/ProductAdd";


export default function MyRoute(){
    return useRoutes([
        {path:'*', element: <NoMatchRoute/>},
        {path:'/', element: <LandingPage/>},
        {path:'/products', element: <ProductList/>},
        {path:'/products/:id', element: <ProductUpdate/>},
        {path:'/products/add', element: <ProductAdd/>},
    ]);
}