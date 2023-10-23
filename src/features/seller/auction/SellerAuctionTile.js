export default function SellerAuctionTile(props) {

    const {auction} = props;
    console.log(`SellerAuctionTile: ${props}`);
    const endedAuction = () => {
        return (
            <div className="col-md-6">
                <div className="col-md-12">
                    <h3 className="text-secondary">Ended</h3>
                    <div className="price d-flex flex-row align-items-center">
                        <div>
                            <small className="dis-price">Highest bid <h3>$60</h3></small>
                        </div>
                    </div>
                    <div className="align-self-end">
                        <small><i className="bi bi-geo"></i> Started at $30</small>
                    </div>
                    <div className="mt-1 align-self-end">
                        <small><i className="bi bi-calendar-check"> </i>
                            October 10, 2023 at 10:30 pm
                        </small>
                    </div>
                </div>
            </div>
        );
    }
    const runningAuction = () => {
        return (
            <div className="col-md-6">
                <div className="col-md-12">
                    <h3 className="text-primary">Running</h3>
                    <div className="price d-flex flex-row align-items-center">
                        <div>
                            <small className="dis-price">Current bid <h3>$59</h3></small>
                        </div>
                    </div>
                    <div className="align-self-end">
                        <small><i className="bi bi-geo"></i> Started at $30</small>
                    </div>
                    <div className="mt-1 align-self-end">
                        <small><i className="bi bi-clock"> </i>
                            10 hours 30 mns
                        </small>
                    </div>
                </div>
            </div>
        );
    }

    const getAuction = (auction) => {
        console.log(auction);
        return ((auction * 1) % 2 === 0) ? runningAuction() : endedAuction();
    }

    return (
        <div className="col-md-6">
            <div className="card my-2">
                <div className="row m-3">
                    <div className="col-md-6">
                        <div>
                            <div className="text-center">
                                <img className="rounded"
                                     src="https://images.unsplash.com/photo-1677414129280-2a0545a774f2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                     width="100%" alt=""/>
                            </div>
                        </div>
                    </div>
                    {getAuction(auction)}
                    <a href='/sellers/auctions/1' className="stretched-link"/>
                </div>
            </div>
        </div>
    );
}