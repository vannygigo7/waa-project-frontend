import {useRoutes} from "react-router-dom";
import ProductList from "../containers/product";
import NoMatchRoute from "./NoMatchRoute";
import ProductAdd from "../containers/product/ProductAdd";
import ProductUpdate from "../containers/product/ProductUpdate";
import LandingPage from "./LandingPage";

export default function MyRoute(){
    return useRoutes([
        {path:'*', element: <NoMatchRoute/>},
        {path:'/', element: <LandingPage/>},
        {path:'/products', element: <ProductList/>},
        {path:'/products/:id', element: <ProductUpdate/>},
        {path:'/products/add', element: <ProductAdd/>},
    ]);
}