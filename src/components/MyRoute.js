import {useRoutes} from "react-router-dom";
import NoMatchRoute from "./NoMatchRoute";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import AuctionDetail from "../features/customer/auction/AuctionDetail";
import HomePage from "../pages/home/HomePage";
import AuctionList from "../features/customer/auction/AuctionList";

import SellerAuctionDetail from "../features/seller/auction/SellerAuctionDetail";
import RegisterForm from "./RegisterForm";
import AddProduct from "../pages/home/components/AddProduct";
import SellerAuctionList from "../features/seller/auction/SellerAuctionList";
import SellerProductList from "../features/seller/product/SellerProductList";
import SellerProductDetail from "../features/seller/product/SellerProductDetail";
import UpdateProduct from "../pages/home/components/UpdateProduct";
import ProductDetail from "../pages/home/components/ProductDetail";
import TestProductList from "../features/testproduct/TestProductList";
import TestProductUpdate from "../features/testproduct/TestProductUpdate";
import TestProductAdd from "../features/testproduct/TestProductAdd";


export default function MyRoute() {
    return useRoutes([

        {path: '/test/products', element: <TestProductList/>},
        {path: '/test/products/:id', element: <TestProductUpdate/>},
        {path: '/test/products/add', element: <TestProductAdd/>},

        {path: '*', element: <NoMatchRoute/>},
        {path: '/', element: <LandingPage/>},
        {path: '/login', element: <LoginForm/>},
        {path: '/register', element: <RegisterForm/>},
        {path: '/home', element: <HomePage/>},
        {path: '/auctions', element: <HomePage/>},
        {path: '/auctions/:id', element: <ProductDetail/>},
        {path: '/customers/auctions', element: <AuctionList/>},
        {path: '/customers/auctions/:id', element: <AuctionDetail/>},
        {path: '/sellers/auctions', element: <SellerAuctionList/>},
        {path: '/sellers/auctions/:id', element: <SellerAuctionDetail/>},
        {path: '/sellers/products', element: <SellerProductList/>},
        {path: '/sellers/products/:id', element: <SellerProductDetail/>},
        {path: '/products/add-new', element: <AddProduct/>},
        {path: '/products/edit/:id', element: <UpdateProduct/>},
    ]);
}