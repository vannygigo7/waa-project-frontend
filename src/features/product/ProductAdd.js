import {useNavigate} from "react-router-dom";
import store from "../../redux/store";
import {addProduct} from "./ProductSlice";
import {ToastContainer} from "react-toastify";
import {showToast} from "../../utils/utilFunctions";

export default function ProductAdd() {
    const navigate = useNavigate();
    const product = {};

    const changedHandler = e => {
        const {name, value} = e.target;
        product[name] = value;
    }

    const goHome = () => {
        navigate('/');
    }

    function saveProduct() {
        store.dispatch(addProduct({product}))
            .then((value) => {
                console.log(store.getState().products);
                const {status, statusText} = value.payload;
                showToast(status, statusText);
            })
            .catch(() => {

            });
    }

    return (
        <div style={{width: '800px'}}>
            <h2>New Product</h2>
            <div className="form-group">
                <label>Title
                    <input onChange={changedHandler} name='title' className="form-control" placeholder="Title"/>
                </label>
            </div>
            <div className="form-group">
                <label>Price
                    <input onChange={changedHandler} name='price' className="form-control" placeholder="Price"/>
                </label>
            </div>
            <div className="form-group">
                <label>Quantity
                    <input onChange={changedHandler} name='quantity' className="form-control" placeholder="Quantity"/>
                </label>
            </div>
            <div className="mt-3"></div>
            <button className="btn btn-secondary me-3" onClick={goHome}>Cancel</button>
            <button className="btn btn-primary" onClick={saveProduct}>Add</button>
            <ToastContainer/>
        </div>
    );
}
