import ProductComponent from "../../../components/Product";
import {getLocalDateTime} from "../../../utils/utilFunctions";
import BidListComponent from "../../../components/BidList";

export default function SellerProductDetailReleasedEnded({product}) {
    const getEndedAuction = () => {
        return (
            <div className="me-3">
                <div className="mt-4 mb-3">
                    <h3 className="text-secondary">Ended</h3>
                    <div className="ml-2">
                        <small className="dis-price">Highest bid <h3>${product.auction.highestBid}</h3></small>
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-calendar-check"> </i>Bidding
                        due: {getLocalDateTime(product.auction.bidDueDateTime)}
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