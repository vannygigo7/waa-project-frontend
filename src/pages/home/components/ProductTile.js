import {useNavigate} from "react-router-dom";

export default function ProductTile({id}) {
    const navigate = useNavigate();
    const bidHandler = (id) => {
        navigate(`/auctions/${id}`);
    }

    return (
        <>
            <div className="card my-2">
                <div className="row p-2">
                    <div className="col-md-4">
                        <div className="images p-2">
                            <div className="text-center">
                                <img className="rounded"
                                     src="https://jennifermaker.com/wp-content/uploads/gift-box-templates-cricut-f-735x735.jpg"
                                     width="200px" height="200px" alt=""/>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="product p-2">
                            <div>
                                <h5>Mystery Box</h5>
                                <div>
                                    <small className="me-2"><i className="bi bi-tag"> </i>electronic</small>
                                    <small className="me-2"><i className="bi bi-tag"> </i>electronic</small>
                                </div>
                                <div className="mt-3">
                                    <div className="me-2">
                                        <h4>$59</h4>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print.</p>

                            <div className="cart mt-2 d-flex justify-content-between">
                                <button className="btn btn-primary px-4"
                                        onClick={() => bidHandler(id)}>Bid
                                </button>
                                <div className="align-self-end">
                                    <small><i className="bi bi-clock"></i> ends in 10 hours 25 mn</small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}