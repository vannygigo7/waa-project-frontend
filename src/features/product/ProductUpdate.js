import {useNavigate, useParams} from "react-router-dom";
import store from "../../redux/store";
import {deleteProduct, fetchProductById, updateProduct} from "./ProductSlice";
import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {showToast} from "../../utils/utilFunctions";

export default function ProductUpdate(props){
    const navigate = useNavigate();
    const {id} = useParams();
    // let originalProduct = {};
    const [originalProduct, setOriginalProduct] = useState(null);
    let tempProduct = {};

    useEffect(()=>{
        store.dispatch(fetchProductById({id}))
            .then((value)=>{
                const {data} = value.payload;
                setOriginalProduct(data);
            })
            .catch((e)=>{
                console.log("fetchProductById Handler:", e);
            });
    },[id, setOriginalProduct]);

    if(!originalProduct){
        return <h2>Product is not found.</h2>
    }else{
        tempProduct = {...originalProduct};
    }

    const goHome = () =>{
        navigate('/');
    }

    function deleteProductHandler(){
        store.dispatch(deleteProduct({id}))
            .then((value)=>{
                goHome();
            })
            .catch((e)=>{
                console.log("deleteProductHandler:", e);
            });
    }

    function updateProductHandler(){
        store.dispatch(updateProduct({id, product: tempProduct}))
            .then((value)=>{
                const {status, statusText} = value.payload;
                showToast(status, statusText);
            })
            .catch(()=>{
            });
    }

    const changedHandler = (e)=>{
        const {name, value} = e.target;
        tempProduct[name] = value;
    }

    return (
        <div style={{width:'800px'}}>
            <h2>Product</h2>
            <p>Title: {originalProduct.title}</p>
            <p>Price: {originalProduct.price}</p>
            <p>Quantity: {originalProduct.quantity}</p>
                <div className="form-group">
                    <label>Title
                        <input onChange={changedHandler} name='title' defaultValue={originalProduct.title}  className="form-control" placeholder="Title"/>
                    </label>
                </div>
                <div className="form-group">
                    <label>Price
                        <input onChange={changedHandler} name='price' defaultValue={originalProduct.price}  className="form-control" placeholder="Price"/>
                    </label>
                    </div>
                <div className="form-group">
                    <label>Quantity
                        <input onChange={changedHandler} name='quantity' defaultValue={originalProduct.quantity}  className="form-control" placeholder="Quantity"/>
                    </label>
                </div>
            <div className="mt-3"></div>
            <button type="button" className="btn btn-secondary me-3" onClick={goHome}>Cancel</button>
            <button type="button" className="btn btn-danger me-3" onClick={deleteProductHandler}>Delete</button>
            <button type="button" className="btn btn-primary" onClick={updateProductHandler}>Update</button>
            <ToastContainer />
        </div>
    );
}
