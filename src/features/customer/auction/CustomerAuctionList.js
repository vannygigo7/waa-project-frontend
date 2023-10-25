import CustomerAuctionTile from "./CustomerAuctionTile";
import { useEffect, useState } from "react";
import store from "../../../redux/store";
import { fetchCustomerAuctions } from "../CustomerSlice";
import { fetchProducts } from "../../seller/product/SellerProductSlice";

export default function CustomerAuctionList() {

    // const {customerAuctions} = store.getState().customerAuctions;
    // const {auctions} = customerAuctions ? customerAuctions.auctions : [];
    // console.log("CustomerAuctionList: ", customerAuctions);

    const [auctions, setAuctions] = useState([]);
    const [searchedProduct, setSearchedProduct] = useState([]);


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
            {searchedProduct.length === 0 ? (
                auctions.map(product => <CustomerAuctionTile key={product.id} product={product} />)
            ) : (
                searchedProduct.map(product => <CustomerAuctionTile key={product.id} product={product} />)
            )}
        </div>);
    }

    const handleSearch = (e) => {
        console.log(e.target.value);
        const productsFound = auctions.filter(pro => pro.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearchedProduct(productsFound)
        console.log("All pro: ", searchedProduct);
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <h2>Bids History</h2>
                    <div className="my-4">
                        <div className="d-flex justify-content-between">
                            < input className="form-control" id="myInput" type="text" onChange={(e) => handleSearch(e)}
                                placeholder="Search Acutions..." />
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