import AuctionTile from "./AuctionTile";

export default function AuctionList() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <h2>My Auctions</h2>
                    <div className="my-4">
                        <div className="d-flex justify-content-between">
                            < input className="form-control" id="myInput" type="text" placeholder="Search Acutions..."/>
                            <div className="ms-1 align-self-end">
                                <button className="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[1, 2, 3, 4, 5, 6, 7].map(auction => <AuctionTile key={auction} id={auction}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}