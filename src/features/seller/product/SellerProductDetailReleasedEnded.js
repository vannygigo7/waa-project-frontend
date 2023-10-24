export default function SellerProductDetailReleasedEnded({product}) {
    const getEndedAuction = () => {
        return (
            <div className="me-3">
                <div className="mt-4 mb-3">
                    <h3 className="text-secondary">Ended</h3>
                    <div className="ml-2">
                        <small className="dis-price">Highest bid <h3>$60</h3></small>
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-calendar-check"> </i>Bidding due: October 10, 2023 at 10:30 pm
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-cash"> </i> Deposit amount <b>$6</b>
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-calendar"> </i>Payment due: October 10, 2023 at 10:30 pm
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-credit-card"> </i>Customer payment: Not yet
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
                             src="https://images.unsplash.com/photo-1677414129280-2a0545a774f2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                             width="100%" alt=""/>
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
                            <div className="ml-2">
                                <small className="dis-price"><i
                                    className="bi bi-geo text-dark"></i> started at
                                </small>
                                <b>100</b>
                                <b> ${product.auction.startPrice}</b>
                            </div>
                        </div>
                    </div>
                    <p className="about">{product.description}</p>
                </div>
            </div>
        );
    }
}