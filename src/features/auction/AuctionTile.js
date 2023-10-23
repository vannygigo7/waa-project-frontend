export default function AuctionTile(props) {

    const {auction} = props;
    console.log(`AuctionTile: ${props}`);

    const endedAuction = () => {
        return (
            <div className="col-md-12">
                <h3 className="text-primary">Mystery Box</h3>
                <div className="price d-flex flex-row align-items-center">
                    <div>
                        <small className="dis-price">highest bid <h3>$59</h3></small>
                    </div>
                </div>
                <div className="align-self-end">
                    <i className="bi bi-trophy"> </i>
                </div>
                <div className="mt-1 align-self-end">
                    <small><i className="bi bi-calendar-check"> </i>
                        23/10/2023 at 10:30pm
                    </small>
                </div>
            </div>
        );
    }
    const runningAuction = () => {
        return (
            <div className="col-md-12">
                <h3 className="text-secondary">Mystery Box</h3>
                <div className="price d-flex flex-row align-items-center">
                    <div>
                        <small className="dis-price">highest bid <h3>$59</h3></small>
                    </div>
                </div>
                <div className="align-self-end">
                    <i className="bi bi-trophy"> </i>
                </div>
                <div className="mt-1 align-self-end">
                    <small><i className="bi bi-calendar-check"> </i>
                        23/10/2023 at 10:30pm
                    </small>
                </div>
            </div>
        );
    }

    const getAuction = (auction) => {
        console.log(auction.auction);
        return ((auction * 1) % 2 !== 0) ? runningAuction() : endedAuction();
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
                    <div className="col-md-6">
                        {getAuction({auction})}
                    </div>
                    <a href={`/customers/auctions/1`} className="stretched-link"/>
                </div>
            </div>
        </div>
    );
}