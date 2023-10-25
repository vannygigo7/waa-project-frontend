import { useEffect, useState } from "react";
import { getLocalDateTime, getTimerFormat } from "../../../utils/utilFunctions";
import ProductComponent from "../../../components/Product";
import BidListComponent from "../../../components/BidList";

export default function SellerProductDetailReleasedRunning({ product }) {
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

            setTimeLeft({ days, hours, minutes, seconds });
            if (difference < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getRunningAuction = () => {
        return (
            <div className="me-3">
                <div className="mt-4 mb-3">
                    <h3 className="text-primary">Running</h3>
                    <div className="ml-2">
                        <small className="dis-price">Current bid <h3>${product.auction.highestBid}</h3></small>
                    </div>
                    <div className="my-3">
                        <h4>{getTimerFormat(timeLeft)}</h4>
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
                </div>

            </div>
        );
    }

    const getProductBody = () => {
        return <ProductComponent product={product} />;
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
                            <BidListComponent product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}