import {useNavigate} from "react-router-dom";
import {ROUTE} from "../../../constant/route";

export default function SellerProductTile(props) {
    const navigate = useNavigate();

    const {product, index} = props;

    const goEditProduct = () => {

    }

    const goProductDetail = () => {
        navigate(ROUTE.SELLER_PRODUCT + `/${product.id}`)
    }

    const checkReleased = (value) => {
        return value ? "released" : "unreleased";
    }

    return (<tr key={product.id}>
        <th scope="row">{index + 1}</th>
        <td className="align-middle">
            <img className="rounded"
                 src="https://jennifermaker.com/wp-content/uploads/gift-box-templates-cricut-f-735x735.jpg"
                 width="80px" height="80px" alt=""/>
        </td>
        <td className="align-middle">{product?.title}</td>
        <td className="align-middle">${product?.auction?.startPrice}</td>
        <td className="align-middle">{checkReleased(product?.released)}</td>
        <td className="align-middle">
            <button className="btn btn-secondary mx-1" onClick={goProductDetail}><i className="bi bi-eye"></i></button>
            <button className="btn btn-secondary mx-1" onClick={goEditProduct}><i className="bi bi-pencil"></i></button>

        </td>
    </tr>);
}