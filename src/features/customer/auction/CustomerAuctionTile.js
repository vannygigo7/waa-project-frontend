import {compareDates, getLocalDateTime} from "../../../utils/utilFunctions";
import {ROUTE} from "../../../constant/route";

export default function CustomerAuctionTile({product}) {

    console.log(`AuctionTile: ${product}`);
    let link = ROUTE.CUSTOMER_AUCTION;

    const endedAuction = () => {
        return (
            <div className="col-md-12">
                <h3 className="text-secondary">{product.title}</h3>
                <div className="price d-flex flex-row align-items-center">
                    <div>
                        <small className="dis-price">highest bid <h3>${product.auction.highestBid}</h3></small>
                    </div>
                </div>
                <div className="align-self-end">
                    <i className="bi bi-clock"> </i>Ended
                </div>
                <div className="mt-1 align-self-end">
                    <small><i className="bi bi-calendar-check"> </i>
                        {getLocalDateTime(product.auction.bidDueDateTime)}
                    </small>
                </div>
            </div>
        );
    }
    const runningAuction = () => {
        return (
            <div className="col-md-12">
                <h3 className="text-primary">{product.title}</h3>
                <div className="price d-flex flex-row align-items-center">
                    <div>
                        <small className="dis-price">highest bid <h3>${product.auction.highestBid}</h3></small>
                    </div>
                </div>
                <div className="align-self-end">
                    <i className="bi bi-clock"> </i>Running
                </div>
                <div className="mt-1 align-self-end">
                    <small><i className="bi bi-calendar-check"> </i>
                        {getLocalDateTime(product.auction.bidDueDateTime)}
                    </small>
                </div>
            </div>
        );
    }

    const getAuction = () => {
        const res = compareDates(new Date(), new Date(product.auction.bidDueDateTime));
        if (res) {
            link = ROUTE.CUSTOMER_AUCTION;
            return endedAuction();
        } else {
            link = ROUTE.AUCTION;
            return runningAuction();
        }
    }


    return (
        <div className="col-md-6">
            <div className="card my-2">
                <div className="row m-3">
                    <div className="col-md-6">
                        <div>
                            <div className="text-center">
                                <img className="rounded"
                                     src={product.imageUrl}
                                     width="200px" height="200px" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {getAuction()}
                    </div>
                    <a href={link + `/${product.id}`} className="stretched-link"/>
                </div>
            </div>
        </div>
    );
}