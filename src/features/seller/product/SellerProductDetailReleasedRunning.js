import {useEffect, useState} from "react";
import {getLocalDateTime} from "../../../utils/utilFunctions";

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
                        <small className="dis-price">Current bid <h3>$ ???</h3></small>
                    </div>
                    <div className="my-3">
                        {/*<h4>10:20:30</h4>*/}
                        {getTimer(timeLeft)}
                        {/*<p>{timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds</p>*/}
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
                    <button className="btn btn-danger mr-2 mt-3 px-4" onClick={() => {
                    }}> End Auction
                    </button>
                </div>

            </div>
        );
    }

    const getProductBody = () => {
        return (
            <div className="col-md-6">
                <div className="images ">
                    <div className="text-center p-4">
                        <img className="rounded"
                             src="https://images.unsplash.com/photo-1677414129280-2a0545a774f2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                             width="100%" alt=""/>
                    </div>
                </div>
                <div className="ms-4">

                    <div className="mb-2">
                        <h5>{product.title}</h5>
                        <div className="mb-2">
                            {product.categories.map(c => <small key={c.id} className="me-2"><i
                                className="bi bi-tag"> </i>{c.name}</small>)}
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <div className="mb-2">
                                <small className="dis-price"><i
                                    className="bi bi-geo text-dark"></i> started at
                                </small>
                                <b> ${product.auction.startPrice}</b>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <div className="ml-2">
                                <small className="dis-price"><i
                                    className="bi bi-info-circle text-dark"></i> {product.description}
                                </small>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    const getBids = () => {
        return (
            <div className="m-3">
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h2 className="mb-1">Bids</h2>
                        </div>
                        <div>
                            <div className="d-flex justify-content-end">
                                <small className="text-muted">?? people</small>
                            </div>
                            <div className="d-flex justify-content-end">
                                <small className="text-muted">{product.auction.bids.length} bids</small>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                {product.auction.bids.map(b =>
                    <div className="row">
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                     className="rounded-circle" style={{width: '50px'}} alt="Avatar"/>
                                <span className="ms-2">John Robin</span> <br/>
                            </div>
                            <div>
                                <div className="d-flex justify-content-end"><b
                                    className="align-self-end">$45</b></div>
                                <div><small className="text-muted">30 mn ago</small></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
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
                            {getBids()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}