
export default function ProductDetails() {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-2">
                <div className="col" style={{ width: "800px" }}>
                    <div class="card mb-3">
                        <img src="https://starwalk.space/gallery/images/what-is-space/1140x641.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Card title</h3>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card mb-3">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                A list item
                                <span class="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                A second list item
                                <span class="badge bg-primary rounded-pill">2</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                A third list item
                                <span class="badge bg-primary rounded-pill">1</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}