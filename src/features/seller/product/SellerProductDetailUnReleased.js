import ProductComponent from "../../../components/Product";
import store from "../../../redux/store";
import {ROUTE} from "../../../constant/route";
import {useNavigate} from "react-router-dom";
import {updateProduct} from "./SellerProductSlice";
import {getLocalDateTime} from "../../../utils/utilFunctions";

export default function SellerProductDetailUnReleased({product}) {
    const navigate = useNavigate();
    console.log("SellerProductDetailUnReleased: ", product);

    const updateProductHandler = () => {
        console.log("updateProduct: ", product.id);
        const {id, data} = product;

        store.dispatch(updateProduct({id, product: data})).then((res) => {
            navigate(ROUTE.SELLER_PRODUCT)
        }).catch((e) => {
            console.log("error updateProduct:", e);
        });
    }
    const getAuction = () => {
        return (
            <div className="me-3">
                <div className="mt-4 mb-3">
                    <h3 className="text-secondary">Unreleased</h3>
                    <div className="my-2">
                        <small className="dis-price">Starting price <h3>${product.auction.startPrice}</h3></small>
                    </div>
                    <div className="align-self-end mt-2"><i className="bi bi-calendar"> </i>
                        Bidding due: {getLocalDateTime(product.auction.bidDueDateTime)}
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-cash"> </i> Deposit amount: <b>${product.auction.depositAmount}</b>
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-calendar"> </i>Payment due: {product.auction.payDate}
                    </div>
                    <button className="btn btn-primary mr-2 mt-3 px-4" onClick={updateProductHandler}> Start Auction
                    </button>
                </div>

            </div>
        );
    }

    const getProductBody = () => {
        return <ProductComponent product={product}/>
    }

    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="row">
                                {getProductBody()}
                                <div className="col-md-6">
                                    {getAuction()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}