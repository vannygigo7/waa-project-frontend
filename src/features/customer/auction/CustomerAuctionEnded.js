import {getLocalDateTime} from "../../../utils/utilFunctions";
import BidListComponent from "../../../components/BidList";
import ProductComponent from "../../../components/Product";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import store from "../../../redux/store";
import {fetchHomeProductById} from "../../../pages/home/HomeSlice";

export default function CustomerAuctionEnded() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        store.dispatch(fetchHomeProductById({id}))
            .then((value) => {
                console.log("fetchHomeProductById 111 ", value);
                // console.log("fetchHomeProductById 222 ", value.payload.data);
                setProduct(value.payload.data);
                // console.log("fetchHomeProductById 333 ", product);
            })
            .catch(() => {
            });
    }, []);

    const getEndedAuction = () => {
        return (
            <div className="me-3">
                <div className="mt-4 mb-3">
                    <h3 className="text-secondary">Ended</h3>
                    <div className="ml-2">
                        <small className="dis-price">Highest bid <h3>${product.auction.highestBid}</h3></small>
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-calendar-check"> </i>Due: {getLocalDateTime(product.auction.bidDueDateTime)}
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-cash"> </i> Deposit amount <b>${product.auction.depositAmount}</b>
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-calendar"> </i>Payment due: {product.auction.payDate}
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-credit-card"> </i>Customer payment: Not yet
                    </div>
                </div>
            </div>
        );
    }

    const getProductBody = () => {
        return <ProductComponent product={product}/>;
    }

    const checkBody = () => {
        return product ? getBody() : <></>;
    }

    const getBody = () => {
        return (
            <div>
                <div className="container mt-5 mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="row">
                                    {getProductBody()}
                                    <div className="col-md-6">
                                        {getEndedAuction()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <BidListComponent product={product}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {checkBody()}
        </>
    );
}