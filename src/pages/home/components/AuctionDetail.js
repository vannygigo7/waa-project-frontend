import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import store from "../../../redux/store";
import { fetchHomeProductById, getHomeProductById } from "../HomeSlice";
import { getLocalDateTime, getTimerFormat, showToast } from "../../../utils/utilFunctions";
import { ToastContainer } from "react-toastify";
import { addBid } from "../../../features/customer/CustomerSlice";
import BidListComponent from "../../../components/BidList";

export default function AuctionDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const bidAmountInput = useRef();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    let interval;

    useEffect(() => {
        store.dispatch(fetchHomeProductById({ id })).then(value => {
            console.log("fetchHomeProductById: ", value.payload.data);
            const p = value.payload.data;
            setProduct(value.payload.data);
            interval = startTimer(p.auction.bidDueDateTime);
        });

        return () => clearInterval(interval);
    }, []);

    const startTimer = (bidDueDateTime) => {
        const targetDate = new Date(bidDueDateTime);
        return setInterval(() => {
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
    }

    const placeBid = () => {
        const bidAmount = bidAmountInput.current.value;
        console.log(bidAmountInput.current.value);
        if (!bidAmount || bidAmount <= product.auction.highestBid) {
            showToast(false, "your bid must be higher than current bid.", 3000);
            return;
        }
        const bidData = { "bidAmount": bidAmount };
        store.dispatch(addBid({ auctionId: id, bidData }))
            .then((value) => {
                console.log("then value:", value.payload);
                const { data, statusCode, message } = value.payload;
                setProduct(data);
                showToast(statusCode, message);
            })
            .catch((e) => {
                console.log("catch:", e);
                showToast(false, 'failed to bid');
            });
    }


    const getRunningAuction = () => {
        return (
            <div className="me-3">
                <div className="mt-4 mb-3">
                    <h3 className="text-primary">Running</h3>
                    <div className="ml-2">
                        <small className="dis-price">Highest bid <h3>${product.auction.highestBid}</h3></small>
                    </div>
                    <div className="my-3">
                        <h4>{getTimerFormat(timeLeft)}</h4>

                    </div>
                    <div className="align-self-end mt-2"><i className="bi bi-calendar"> </i>
                        Bidding due: {getLocalDateTime(product.auction.bidDueDateTime)}
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-cash"> </i> Deposit amount: ${product.auction.depositAmount}
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-calendar"> </i>Payment due: {product.auction.payDate}
                    </div>
                    <div className="cart mt-4 align-items-center">
                        <label className="mb-2">
                            Please increase your bid at least <b>$1</b>
                        </label>
                        <input ref={bidAmountInput} type="number" className="form-control"
                            placeholder="Enter amount" />
                        <button className="btn btn-primary mr-2 mt-3 px-4" onClick={placeBid}> Place Bid
                        </button>
                    </div>
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
                            src={product.imageUrl}
                            width="100%" alt="" />
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


    const getBody = () => {
        return (<div>
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
            <ToastContainer />
        </div>);
    }

    return (
        <>
            {product && getBody()}
        </>
    );
}