import CustomerAuctionTile from "./CustomerAuctionTile";
import {useEffect, useState} from "react";
import store from "../../../redux/store";
import {fetchCustomerAuctions} from "../CustomerSlice";

export default function CustomerAuctionList() {

    // const {customerAuctions} = store.getState().customerAuctions;
    // const {auctions} = customerAuctions ? customerAuctions.auctions : [];
    // console.log("CustomerAuctionList: ", customerAuctions);

    const [auctions, setAuctions] = useState();


    useEffect(() => {
        store.dispatch(fetchCustomerAuctions()).then(value => {
            console.log("fetchCustomerAuctions: ", value.payload.data);
            setAuctions(value.payload.data);
        });
    }, []);

    const checkAuctions = () => {
        if (auctions) {
            return getAuctions();
        } else {
            return <></>;
        }
    }

    const getAuctions = () => {
        return (<div className="row">
            {auctions.map(product => <CustomerAuctionTile key={product.id} product={product}/>)}
        </div>);
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <h2>My Bids</h2>
                    <div className="my-4">
                        <div className="d-flex justify-content-between">
                            < input className="form-control" id="myInput" type="text"
                                    placeholder="Search Acutions..."/>
                            <div className="ms-1 align-self-end">
                                <button className="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                    {checkAuctions()}
                </div>
            </div>
        </div>
    );
}