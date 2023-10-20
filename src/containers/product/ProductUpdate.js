import {useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {deleteProductAction, updateProductAction} from "../../redux/actions/product";
// import ProductService from "../service/ProductService";
// import ResponseMessage from "./ResponseMessage";

function ProductUpdate(props){
    const navigate = useNavigate();
    // const [responseStatus, setResponseStatus] = useState(null);
    // const [originalProduct, setOriginalProduct] = useState(null);
    const {id} = useParams();
    const {products, updateProduct, deleteProduct} =  props;
    let originalProduct = products.find(p=>p.id === (id * 1));
    let tempProduct = {};

    if(!originalProduct){
        return <p>Product is not found.</p>
    }else{
        tempProduct = {...originalProduct};
    }

    const goHome = () =>{
        navigate('/');
    }

    function deleteProductHandler(){
        deleteProduct(id);
        goHome();
    }

    function updateProductHandler(){
        updateProduct(id, tempProduct);
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
            {/*<ResponseMessage status={responseStatus}/>*/}
        </div>
    );
}

export default connect(
    state => ({products: state.products}),
    {updateProduct: updateProductAction, deleteProduct: deleteProductAction}
)(ProductUpdate);