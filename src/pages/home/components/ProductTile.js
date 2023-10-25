import { useNavigate } from "react-router-dom";
import { getLocalDateTime } from "../../../utils/utilFunctions";
import { ROUTE } from "../../../constant/route";

export default function ProductTile(props) {
    const navigate = useNavigate();

    const { product } = props;

    const goAuctionDetail = () => {
        navigate(ROUTE.AUCTION + `/${product.id}`);
    }

    return (
        <>
            <div className="card my-2">
                <div className="row p-2">
                    <div className="col-md-4">
                        <div className="images p-2">
                            <div className="text-center">
                                <img className="rounded"
                                    src={product.imageUrl}
                                    width="200px" height="200px" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="product p-2">
                            <div>
                                <h5>{product.title}</h5>
                                <div>
                                    {product.categories.map(c => <small key={c.id} className="me-2"><i
                                        className="bi bi-tag"> </i>{c.name}</small>)}
                                </div>

                                <div className="mt-3">
                                    <div className="me-2">
                                        <h4>$ {product.auction.highestBid}</h4>
                                    </div>
                                </div>
                            </div>
                            <p>{product.description}</p>

                            <div className="cart mt-2 d-flex justify-content-between">
                                <button className="btn btn-primary px-4"
                                    onClick={goAuctionDetail}>Bid
                                </button>
                                <div className="align-self-end">
                                    <small>
                                        End: {getLocalDateTime(product.auction.bidDueDateTime)}
                                        {/*<i className="bi bi-calendar"></i> {getLocalDateTime(product.auction.bidDueDateTime)}*/}
                                    </small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}