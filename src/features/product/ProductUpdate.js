
import {useNavigate, useParams} from "react-router-dom";
import store from "../../redux/store";
import {deleteProduct, fetchProductById, updateProduct} from "./ProductSlice";
import {useEffect} from "react";

export default function ProductUpdate(props){
    const navigate = useNavigate();
    const {id} = useParams();
    const {products} =  store.getState().products;
    console.log(store.getState().products);
    let originalProduct = products.find(p=>p.id === (id * 1));
    let tempProduct = {};

    useEffect(()=>{
        store.dispatch(fetchProductById({id}));
    },[]);

    if(!originalProduct){
        return <p>Product is not found.</p>
    }else{
        tempProduct = {...originalProduct};
    }

    const goHome = () =>{
        navigate('/');
    }

    function deleteProductHandler(){
        store.dispatch(deleteProduct({id}));
        console.log("deleted");
        goHome();
    }

    function updateProductHandler(){
        store.dispatch(updateProduct({id, product: tempProduct}));
        console.log("updated");
        goHome();
    }

    const changedHandler = (e)=>{
        const {name, value} = e.target;
        tempProduct[name] = value;
    }

    return (
        <div style={{width:'500px'}}>
            <p>Title: {originalProduct.title}</p>
            <p>Price: {originalProduct.price}</p>
            <p>Quantity: {originalProduct.quantity}</p>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input onChange={changedHandler} name='title' defaultValue={originalProduct.title}  className="form-control" placeholder="Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input onChange={changedHandler} name='price' defaultValue={originalProduct.price}  className="form-control" placeholder="Price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Quantity</label>
                    <input onChange={changedHandler} name='quantity' defaultValue={originalProduct.quantity}  className="form-control" placeholder="Quantity"/>
                </div>
            <button className="btn btn-default" onClick={goHome}>Cancel</button>
            <button className="btn btn-danger" onClick={deleteProductHandler}>Delete</button>
            <button className="btn btn-primary" onClick={updateProductHandler}>Update</button>
            {/*<ResponseMessage status={status}/>*/}
        </div>
    );
}
