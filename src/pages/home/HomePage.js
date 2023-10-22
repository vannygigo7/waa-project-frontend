import ProductTile from "./components/ProductTile";

export default function HomePage() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <h2>Creative Name</h2>
                    <div className="my-4">
                        <div className="d-flex justify-content-between">
                            < input className="form-control" id="myInput" type="text" placeholder="Search products..."/>
                            <div className="ms-1 align-self-end">
                                <button className="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                    {[1, 2, 3, 4, 5, 6, 7].map(product => <ProductTile key={product} id={1}/>)}
                </div>
            </div>
        </div>
    );
}