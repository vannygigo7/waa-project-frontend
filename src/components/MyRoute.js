import {useRoutes} from "react-router-dom";
import NotFound from "../pages/notfound/NotFound";
import LandingPage from "../pages/landing/LandingPage";
import LoginForm from "../pages/login/LoginForm";
import CustomerAuctionDetail from "../features/customer/auction/CustomerAuctionDetail";
import HomePage from "../pages/home/HomePage";
import CustomerAuctionList from "../features/customer/auction/./CustomerAuctionList";

import SellerAuctionDetail from "../features/seller/auction/SellerAuctionDetail";
import RegisterForm from "../pages/register/RegisterForm";
import SellerProductAdd from "../features/seller/product/SellerProductAdd";
import SellerAuctionList from "../features/seller/auction/SellerAuctionList";
import SellerProductList from "../features/seller/product/SellerProductList";
import SellerProductDetail from "../features/seller/product/SellerProductDetail";
import SellerProductUpdate from "../features/seller/product/SellerProductUpdate";
import AuctionDetail from "../pages/home/components/AuctionDetail";
import TestProductList from "../features/testproduct/TestProductList";
import TestProductUpdate from "../features/testproduct/TestProductUpdate";
import TestProductAdd from "../features/testproduct/TestProductAdd";
import {ROUTE} from "../constant/route";
import CustomerAuctionEnded from "../features/customer/auction/CustomerAuctionEnded";


export default function MyRoute() {
    return useRoutes([

        {path: '/test/products', element: <TestProductList/>},
        {path: '/test/products/:id', element: <TestProductUpdate/>},
        {path: '/test/products/add', element: <TestProductAdd/>},

        {path: '*', element: <NotFound/>},
        {path: '/', element: <LandingPage/>},
        {path: ROUTE.LOGIN, element: <LoginForm/>},
        {path: ROUTE.REGISTER, element: <RegisterForm/>},
        {path: ROUTE.HOME, element: <HomePage/>},
        {path: ROUTE.AUCTION, element: <HomePage/>},
        {path: ROUTE.AUCTION + '/:id', element: <AuctionDetail/>},
        {path: ROUTE.CUSTOMER_AUCTION, element: <CustomerAuctionList/>},
        {path: ROUTE.CUSTOMER_AUCTION + '/:id', element: <CustomerAuctionEnded/>},
        // {path: ROUTE.CUSTOMER_AUCTION + '/:id', element: <CustomerAuctionDetail/>},
        {path: ROUTE.SELLER_AUCTION, element: <SellerAuctionList/>},
        {path: ROUTE.SELLER_AUCTION + '/:id', element: <SellerAuctionDetail/>},
        {path: ROUTE.SELLER_PRODUCT, element: <SellerProductList/>},
        {path: ROUTE.SELLER_PRODUCT + '/:id', element: <SellerProductDetail/>},
        {path: ROUTE.SELLER_PRODUCT_ADD, element: <SellerProductAdd/>},
        {path: ROUTE.SELLER_PRODUCT_UPDATE + '/:id', element: <SellerProductUpdate/>},
    ]);
}