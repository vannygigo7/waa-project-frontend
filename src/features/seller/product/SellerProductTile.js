import {useNavigate} from "react-router-dom";
import {ROUTE} from "../../../constant/route";
import { deleteProduct } from "./SellerProductSlice";
import store from "../../../redux/store";

export default function SellerProductTile(props) {
    const navigate = useNavigate();

    const {product, index} = props;

    const goEditProduct = () => {
        navigate(`/products/edit/${product.id}`)
    }

    const goProductDetail = () => {
        navigate(ROUTE.SELLER_PRODUCT + `/${product.id}`)
    }

    const checkReleased = (value) => {
        return value ? "released" : "unreleased";
    }

    const handleDelete = () => {
        console.log("ID: ", product?.id);
        store.dispatch(deleteProduct({id: product.id})).then(res => {
            console.log("Delete: ",res);
        })
    }

    return (<tr key={product.id}>
        <th scope="row">{index + 1}</th>
        <td className="align-middle">
            <img className="rounded"
                 src={product.imageUrl}
                 width="80px" height="80px" alt=""/>
        </td>
        <td className="align-middle">{product?.title}</td>
        <td className="align-middle">${product?.auction?.startPrice}</td>
        <td className="align-middle">{checkReleased(product?.released)}</td>
        <td className="align-middle">
            {product?.released? (
                <button className="btn btn-info mx-1" onClick={goProductDetail}><i className="bi bi-eye"></i></button>
            ) : (
                <div>
                    <button className="btn btn-info mx-1" onClick={goProductDetail}><i className="bi bi-eye"></i></button>
                    <button className="btn btn-warning mx-1" onClick={goEditProduct}><i className="bi bi-pencil"></i></button>
                    <button className="btn btn-danger mx-1" onClick={handleDelete}><i className="bi bi-trash"></i></button>
                </div>
            )}
        </td>
    </tr>);
}