import {useRoutes} from "react-router-dom";
import NoMatchRoute from "./NoMatchRoute";
import LandingPage from "./LandingPage";
import ProductList from "../features/product/ProductList";
import ProductUpdate from "../features/product/ProductUpdate";
import ProductAdd from "../features/product/ProductAdd";
import AuctionDetail from "../features/auction/AuctionDetail";
import HomePage from "../pages/home/HomePage";
import AuctionList from "../features/auction/AuctionList";


export default function MyRoute() {
    return useRoutes([
        {path: '*', element: <NoMatchRoute/>},
        {path: '/', element: <HomePage/>},
        {path: '/auctions/:id', element: <AuctionDetail/>},
        {path: '/products', element: <ProductList/>},
        {path: '/products/:id', element: <ProductUpdate/>},
        {path: '/products/add', element: <ProductAdd/>},
        {path: '/customers/auctions', element: <AuctionList/>},
        {path: '/customers/auctions/:id', element: <AuctionDetail/>},
    ]);
}