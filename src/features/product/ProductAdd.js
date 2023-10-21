
import {useNavigate} from "react-router-dom";
import store from "../../redux/store";
import {addProduct} from "./ProductSlice";
export default function ProductAdd(){
    const navigate = useNavigate();
    const product = {};

    const changedHandler = e =>{
        const {name, value} = e.target;
        product[name] = value;
    }

    const goHome = ()=>{
        navigate('/');
    }
    function saveProduct(){
        store.dispatch(addProduct({product}));
        goHome();
    }

    return (
        <div style={{width:'500px'}}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input onChange={changedHandler} name='title'  className="form-control" placeholder="Title"/>
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input onChange={changedHandler} name='price' className="form-control" placeholder="Price"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Quantity</label>
                <input onChange={changedHandler} name='quantity' className="form-control" placeholder="Quantity"/>
            </div>
            <button className="btn btn-default" onClick={goHome}>Cancel</button>
            <button className="btn btn-primary" onClick={saveProduct}>Add</button>
            {/*<ResponseMessage status={responseStatus}/>*/}
        </div>
    );
}
