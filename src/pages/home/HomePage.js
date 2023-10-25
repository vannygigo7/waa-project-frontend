import { useEffect, useRef, useState } from "react";
import store from "../../redux/store";

import ProductTile from "./components/ProductTile";
import { fetchHomeProducts, searchHomeProducts } from "./HomeSlice";
import NavBar from "../../components/NavBar";
import { Link, Route } from "react-router-dom";
import { ROUTE } from "../../constant/route";

export default function HomePage() {
    const searchTextInput = useRef();
    const [products, setProducts] = useState(null);
    // let {products} = store.getState();
    console.log("HomePage: ", store.getState().homeProducts);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = () => {
        store.dispatch(fetchHomeProducts())
            .then((value) => {
                console.log("fetchHomeProducts 1:", value);
                setProducts(value.payload.data);
                console.log("fetchHomeProducts 2:", products);
            })
            .catch(() => {
            });
    }


    const searchHandler = () => {
        const searchValue = searchTextInput.current.value;
        if (!searchValue) {
            loadProducts();
            return;
        }

        store.dispatch(searchHomeProducts({ name: searchValue }))
            .then((value) => {
                console.log("searchHomeProducts 1:", value);
                setProducts(value.payload.data);
                console.log("searchHomeProducts 2:", products);
            })
            .catch(() => {
            });
    }

    return (
        <div>
            <NavBar />
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="d-flex justify-content-between">
                            <div><h2>Auctions</h2></div>
                            <div>
                                <Link to={ROUTE.CUSTOMER_AUCTION}><h5>Bids History</h5></Link>
                            </div>
                        </div>

                        <div className="my-4">
                            <div className="d-flex justify-content-between">
                                <input ref={searchTextInput} className="form-control" id="myInput" type="text"
                                    placeholder="Search products..." />
                                <div className="ms-1 align-self-end">
                                    <button onClick={searchHandler} className="btn btn-outline-secondary"
                                        type="button">Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        {products && products.map(product => <ProductTile key={product.id} {...{ product }} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}