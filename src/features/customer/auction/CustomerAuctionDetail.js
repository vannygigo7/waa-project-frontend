import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import store from "../../../redux/store";
import {fetchHomeProductById} from "../../../pages/home/HomeSlice";

export default function CustomerAuctionDetail() {
    const {id} = useParams();

    console.log(`fetchHomeProductById: ${id}`);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        store.dispatch(fetchHomeProductById({id}))
            .then((value) => {
                console.log("fetchHomeProductById 111 ", value);
                console.log("fetchHomeProductById 222 ", value.payload.data);
                // setProduct(value.payload.data);
                console.log("fetchHomeProductById 333 ", product);
            })
            .catch(() => {
            });
    }, []);

    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images ">
                                        <div className="text-center p-4">
                                            <img className="rounded"
                                                 src="https://images.unsplash.com/photo-1677414129280-2a0545a774f2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                 width="100%" alt=""/>
                                        </div>
                                    </div>
                                    <div className="product ms-4">
                                        <div className="mb-2">
                                            <h5>Mystery Box</h5>
                                            <div className="mb-2">
                                                <small className="me-2"><i className="bi bi-tag"> </i>electronic</small>
                                                <small className="me-2"><i className="bi bi-tag"> </i>electronic</small>
                                            </div>
                                            <div className="d-flex flex-row align-items-center">
                                                <div className="ml-2">
                                                    <small className="dis-price"><i
                                                        className="bi bi-geo text-dark"></i> started at
                                                    </small>
                                                    <b> $30</b>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="about">Lorem ipsum is placeholder text commonly used in the
                                            graphic, print, and publishing industries.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product me-3">
                                        <div className="mt-4 mb-3">
                                            <h3>Auction</h3>
                                            <div className="price d-flex flex-row align-items-center">
                                                <div className="ml-2"><small className="dis-price">current
                                                    bid <h3>$59</h3></small>
                                                </div>
                                            </div>
                                            <div className="align-self-end mt-1"><i className="bi bi-clock"> </i>
                                                12 hours 30 mn
                                            </div>
                                        </div>

                                        <div className="cart mt-4 align-items-center">
                                            <label className="mb-2">
                                                Please increase your bid at least <b>$1</b>
                                            </label>
                                            <input type="text" className="form-control" placeholder="Enter amount"/>
                                            <button className="btn btn-primary mr-2 mt-3 px-4" onClick={() => {
                                            }}> Place Bid
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="m-3">
                                <div className="row">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h2 className="mb-1">Bids</h2>
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-end">
                                                <small className="text-muted">10 people</small>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <small className="text-muted">30 bids</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
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
                                <hr/>
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
                                <hr/>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}