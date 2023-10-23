export default function AuctionTile({id}) {
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
                        <div className="col-md-12">
                            <h3 className="text-success">Mystery Box</h3>
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
                    </div>
                    <a href={`/customers/auctions/${id}`} className="stretched-link"/>
                </div>
            </div>
        </div>
    );
}