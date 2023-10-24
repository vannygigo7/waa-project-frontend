import CustomerAuctionTile from "./CustomerAuctionTile";
import {useEffect} from "react";
import store from "../../../redux/store";
import {fetchCustomerAuctions} from "../CustomerSlice";

export default function CustomerAuctionList() {

    const {auctions} = store.getState().customerAuctions;
    console.log("CustomerAuctionList:", auctions);

    useEffect(() => {
        store.dispatch(fetchCustomerAuctions()).then(value => {
            console.log("fetchCustomerAuctions: ", value.payload.data);
        });
    }, []);

    return (
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <h2>My Bids</h2>
                    <div className="my-4">
                        <div className="d-flex justify-content-between">
                            < input className="form-control" id="myInput" type="text" placeholder="Search Acutions..."/>
                            <div className="ms-1 align-self-end">
                                <button className="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {auctions.map(auction => <CustomerAuctionTile key={auction.id} {...auction}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}