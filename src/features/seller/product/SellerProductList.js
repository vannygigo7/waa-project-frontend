import {ToastContainer} from "react-toastify";
import SellerProductTile from "./SellerProductTile";
import {useNavigate} from "react-router-dom";

export default function SellerProductList() {
    const navigate = useNavigate();
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
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((product, index) =>
                            <SellerProductTile key={product.id} {...{index, product}} />
                        )}
                        </tbody>
                    </table>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    );
}