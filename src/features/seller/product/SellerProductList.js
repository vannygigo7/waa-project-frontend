import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import store from "../../../redux/store";
import { fetchProducts } from "./SellerProductSlice";
import SellerProductTile from "./SellerProductTile";
import { ROUTE } from "../../../constant/route";
import NavBar from "../../../components/NavBar";

export default function SellerProductList() {
    const navigate = useNavigate();
    const { products } = store.getState().sellerProducts;
    console.log("Seller ProductList===>", products);

    useEffect(() => {
        store.dispatch(fetchProducts())
            .then(() => {
            })
            .catch(() => {
            });
    }, []);

    const goNewProduct = () => {
        navigate(ROUTE.SELLER_PRODUCT_ADD);
    }

    return (
        <div>
            <NavBar />
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="my-4">
                            <div className="d-flex justify-content-between">
                                <h2>Products</h2>
                                <div className="ms-1 align-self-end">
                                    <button className="btn btn-primary" onClick={goNewProduct}> New</button>
                                </div>
                            </div>
                        </div>
                        < input className="form-control mb-3" id="myInput" type="text" placeholder="Search products..." />
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Starting Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) =>
                                    <SellerProductTile key={index} {...{ index, product }} />
                                )}
                            </tbody>
                        </table>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}