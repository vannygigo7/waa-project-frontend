import {useNavigate} from "react-router-dom";
import TestProductTile from "./TestProductTile";
import {useEffect} from "react";
import {fetchProductsTest} from "./TestProductSlice";
import store from "../../redux/store";
import {ToastContainer} from "react-toastify";

export default function TestProductList() {
    const navigate = useNavigate();
    const {products} = store.getState().testProducts;
    console.log("Test ProductList===>", products);

    useEffect(() => {
        store.dispatch(fetchProductsTest())
            .then(() => {
            })
            .catch(() => {
            });
    }, []);

    const newProduct = () => {
        navigate('/test/products/add');
    }

    return (
        <div style={{width: '800px'}}>
            <div className="d-flex justify-content-between">
                <h2 className="align-self-start">Product List</h2>
                <div className="align-self-end">
                    <button className="btn btn-primary" onClick={newProduct}>New</button>
                </div>
            </div>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) =>
                    <TestProductTile key={product.id} {...{index, product}} />
                )}
                </tbody>
            </table>
            <ToastContainer/>
        </div>
    );
}
