export default function ProductComponent({product}) {
    return (
        <div className="col-md-6">
            <div className="images ">
                <div className="text-center p-4">
                    <img className="rounded"
                         src={product.imageUrl}
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