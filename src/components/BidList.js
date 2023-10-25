import {getLocalDateTime, getNumberOfBidders} from "../utils/utilFunctions";

export default function BidListComponent({product}) {
    const showUnderline = (index, Arraylen) => {
        return index < Arraylen - 1 ? <hr/> : '';
    }
    return (
        <div className="m-3">
            <div className="row">
                <div className="d-flex justify-content-between">
                    <div>
                        <h2 className="mb-1">Bids</h2>
                    </div>
                    <div>
                        <div className="d-flex justify-content-end">
                            <small
                                className="text-muted">{getNumberOfBidders(product.auction.numberOfBidders)} </small>
                        </div>
                        <div className="d-flex justify-content-end">
                            <small className="text-muted">{product.auction.bids.length} bids</small>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            {product.auction.bids.map((bid, index) =>
                <div key={bid.id}>
                    <div className="row">
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src={bid.profileImageUrl}
                                     className="rounded-circle" style={{width: '50px'}} alt="Avatar"/>
                                <span className="ms-2">{bid.firstName} {bid.lastName}</span> <br/>
                            </div>
                            <div>
                                <div className="d-flex justify-content-end"><b
                                    className="align-self-end">${bid.bidAmount}</b></div>
                                <div><small className="text-muted">{getLocalDateTime(bid.bidDateTime)}</small></div>
                            </div>
                        </div>
                    </div>
                    {showUnderline(index, product.auction.bids.length)}
                </div>
            )}
        </div>
    );
}