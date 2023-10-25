import {useEffect, useState} from "react";
import {getLocalDateTime} from "../../../utils/utilFunctions";
import ProductComponent from "../../../components/Product";
import BidListComponent from "../../../components/BidList";

export default function SellerProductDetailReleasedRunning({product}) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date(product.auction.bidDueDateTime); // Example target date and time

        const interval = setInterval(() => {

            const now = new Date();
            const difference = targetDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({days, hours, minutes, seconds});
            console.log(seconds);
            if (difference < 0) {
                clearInterval(interval);
                setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getTimer = (time) => {
        let res = '';
        if (time.days > 0)
            res += time.days + 'days, ';
        if (time.hours > 0)
            res += time.hours + ':';
        if (time.minutes > 0)
            res += time.minutes + ':';
        if (time.seconds > 0)
            res += time.seconds;

        return (
            <h4>{res}</h4>
        );
    }

    const getRunningAuction = () => {
        return (
            <div className="me-3">
                <div className="mt-4 mb-3">
                    <h3 className="text-primary">Running</h3>
                    <div className="ml-2">
                        <small className="dis-price">Current bid <h3>${product.auction.highestBid}</h3></small>
                    </div>
                    <div className="my-3">
                        {/*<h4>10:20:30</h4>*/}
                        {getTimer(timeLeft)}
                    </div>
                    <div className="align-self-end mt-2"><i className="bi bi-calendar"> </i>
                        Bidding due: {getLocalDateTime(product.auction.bidDueDateTime)}
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-cash"> </i> Deposit amount <b>${product.auction.depositAmount}</b>
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-calendar"> </i>Payment due: {product.auction.payDate}
                    </div>
                    {/*<button className="btn btn-danger mr-2 mt-3 px-4" onClick={() => {*/}
                    {/*}}> End Auction*/}
                    {/*</button>*/}
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
                                    {getRunningAuction()}
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