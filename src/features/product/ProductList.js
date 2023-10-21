import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";
import {useEffect} from "react";
import {fetchProducts} from "./ProductSlice";
import store from "../../redux/store";
import {ToastContainer} from "react-toastify";
export default function ProductList(){
    const navigate = useNavigate();
    const {products} = store.getState().products;
    console.log("ProductList===>", products);

    useEffect(()=>{
        store.dispatch(fetchProducts())
            .then(()=>{})
            .catch(()=>{});
    },[]);

    const newProduct = () => {
        navigate('/products/add');
    }

    return (
        <div style={{width:'800px'}}>
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
                        <ProductItem key={product.id} {...{ index, product }} />
                    )}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
}
