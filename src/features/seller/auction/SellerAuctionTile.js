export default function SellerAuctionTile({id}) {
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
                            {/*<div className="mt-2">*/}
                            {/*    <h5>Men's slim fit t-shirt</h5>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <h3 className="text-primary">Auction</h3>
                            <div className="price d-flex flex-row align-items-center">
                                <div>
                                    <small className="dis-price">current bid <h3>$59</h3></small>
                                </div>
                            </div>
                            <div className="align-self-end">
                                <small><i className="bi bi-geo"></i> started from $30</small>
                            </div>
                            <div className="mt-1 align-self-end">
                                <small><i className="bi bi-clock"> </i>
                                    10 hours 30 mns
                                </small>
                            </div>
                        </div>
                    </div>
                    <a href={`/sellers/auctions/${id}`} className="stretched-link"/>
                </div>
            </div>
        </div>
    );
}