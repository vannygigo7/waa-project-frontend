import {useRoutes} from "react-router-dom";
import NoMatchRoute from "./NoMatchRoute";
import LandingPage from "./LandingPage";
import ProductList from "../features/product/ProductList";
import ProductUpdate from "../features/product/ProductUpdate";
import ProductAdd from "../features/product/ProductAdd";
import LoginForm from "./LoginForm";
import AuctionDetail from "../features/auction/AuctionDetail";
import HomePage from "../pages/home/HomePage";
import AuctionList from "../features/auction/AuctionList";

import SellerAuctionDetail from "../features/seller/auction/SellerAuctionDetail";
import RegisterForm from "./RegisterForm";
import AddProduct from "../pages/home/components/AddProduct";
import ProductDetails from "../pages/home/components/ProductDetails";
import SellerAuctionList from "../features/seller/auction/SellerAuctionList";
import SellerProductList from "../features/seller/product/SellerProductList";


export default function MyRoute() {
    return useRoutes([
        {path: '*', element: <NoMatchRoute/>},
        {path: '/', element: <LandingPage/>},
        {path: '/login', element: <LoginForm/>},
        {path: '/register', element: <RegisterForm/>},
        {path: '/home', element: <HomePage/>},
        {path: '/auctions/:id', element: <AuctionDetail/>},
        {path: '/products', element: <ProductList/>},
        {path: '/products/:id', element: <ProductUpdate/>},
        {path: '/products/add', element: <ProductAdd/>},
        {path: '/customers/auctions', element: <AuctionList/>},
        {path: '/customers/auctions/:id', element: <AuctionDetail/>},
        {path: '/sellers/auctions', element: <SellerAuctionList/>},
        {path: '/sellers/auctions/:id', element: <SellerAuctionDetail/>},
        {path: '/sellers/products', element: <SellerProductList/>},
        {path: '/products/add-new', element: <AddProduct/>},
        {path: '/products/view', element: <ProductDetails/>},
    ]);
}