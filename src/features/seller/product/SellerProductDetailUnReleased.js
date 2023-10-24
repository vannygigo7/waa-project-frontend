export default function SellerProductDetailUnReleased({product}) {
    console.log("SellerProductDetailUnReleased: ", product);
    const getAuction = () => {
        return (
            <div className="me-3">
                <div className="mt-4 mb-3">
                    <h3 className="text-secondary">Unreleased</h3>
                    <div className="my-2">
                        <small className="dis-price">Starting price <h3>${product.auction.startPrice}</h3></small>
                    </div>
                    <div className="align-self-end mt-2"><i className="bi bi-calendar"> </i>
                        Bidding due: {product.auction.bidDueDateTime}
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-cash"> </i> Deposit amount: <b>${product.auction.depositAmount}</b>
                    </div>
                    <div className="align-self-end mt-2">
                        <i className="bi bi-calendar"> </i>Payment due: {product.auction.payDate}
                    </div>
                    <button className="btn btn-primary mr-2 mt-3 px-4" onClick={() => {
                    }}> Start Auction
                    </button>
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
                            <div className="mb-2">
                                <small className="dis-price"><i
                                    className="bi bi-geo text-dark"></i> started at
                                </small>
                                <b> ${product.auction.startPrice}</b>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <div className="ml-2">
                                <small className="dis-price"><i
                                    className="bi bi-info-circle text-dark"></i> {product.description}
                                </small>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="row">
                                {getProductBody()}
                                <div className="col-md-6">
                                    {getAuction()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}