import {ToastContainer} from "react-toastify";
import SellerProductTile from "./SellerProductTile";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import store from "../../../redux/store";
import {fetchProducts} from "./SellerProductSlice";

export default function SellerProductList() {
    const navigate = useNavigate();
    const {products} = store.getState().products;
    console.log("ProductList===>", products);

    useEffect(() => {
        store.dispatch(fetchProducts({release: true}))
            .then(() => {
            })
            .catch(() => {
            });
    }, []);

    const goNewProduct = () => {
        navigate('/products/add-new');
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <h2>Products</h2>
                    <div className="my-4">
                        <div className="d-flex justify-content-between">
                            < input className="form-control" id="myInput" type="text" placeholder="Search products..."/>
                            <div className="ms-1 align-self-end">
                                <button className="btn btn-primary" onClick={goNewProduct}> New</button>
                            </div>
                        </div>
                    </div>
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
                            <SellerProductTile key={index} {...{index, product}} />
                        )}
                        </tbody>
                    </table>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    );
}