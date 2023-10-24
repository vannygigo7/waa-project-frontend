import {useState} from "react";
import {addProduct} from "./SellerProductSlice";
import store from "../../../redux/store";


export default function SellerProductAdd() {

    const [isRelease, setIsRelease] = useState(false);

    function handleGetDataAndSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const title = form.get("title");
        const description = form.get("description");
        const categories = form.get("categories");
        const imageUrl = form.get("imageUrl");

        const startPrice = form.get("startPrice");
        const depositAmount = form.get("depositAmount");
        const payDate = form.get("payDate");
        const bidDueDate = form.get("bidDueDate");
        const bidDueTime = form.get("bidDueTime");

        const product = {
            title,
            description,
            imageUrl,
            categories: [{name: categories}],
            released: isRelease,
            startPrice,
            depositAmount,
            bidDueDateTime: bidDueDate + "T" + bidDueTime,
            payDate
        }

        console.log("Product: ", product);

        store.dispatch(addProduct({product})).then((res) => {
            console.log("addProduct:", res);
        }).catch((e) => {
            console.log("error addProduct:", e);
        });
    }

    // function onRelease(product){
    //     store.dispatch(addProduct({product})).then((res)=>{
    //         console.log("addProduct:", res);
    //     }).catch((e)=>{
    //         console.log("error addProduct:", e);
    //     });
    // }

    // function onDraft(product){
    //     store.dispatch(addProduct({product})).then((res)=>{
    //         console.log("addProduct:", res);
    //     }).catch((e)=>{
    //         console.log("error addProduct:", e);
    //     });
    // }

    return (
        <div className="border border-1 p-5 m-5 rounded-3">
            <form onSubmit={handleGetDataAndSubmit}>
                <div className="container border-bottom">
                    <h2>Add new product</h2>
                </div>
                <div className="container mt-4">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input name="title" type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder=""/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category-names" className="form-label">Category</label><br/>
                        <select name="categories" id="category-names" className="form-control">
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Image url</label>
                        <input name="imageUrl" type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder=""/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea name="description" className="form-control" id="exampleFormControlTextarea1"
                                  rows="3"></textarea>
                    </div>
                </div>
                <div className="container border-bottom mt-5">
                    <h2>Add auction</h2>
                </div>
                <div className="container mt-4">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Start price</label>
                        <input name="startPrice" type="number" className="form-control" id="exampleFormControlInput1"
                               placeholder=""/>
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Highest bid price</label>
                        <input name="highestBid" type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Deposite amount</label>
                        <input name="depositAmount" type="number" className="form-control" id="exampleFormControlInput1"
                               placeholder=""/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Bid due date</label>
                        <input name="bidDueDate" type="date" className="form-control" id="exampleFormControlInput1"
                               placeholder=""/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Bid due time</label>
                        <input name="bidDueTime" type="time" className="form-control" id="exampleFormControlInput1"
                               placeholder=""/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Payment due date</label>
                        <input name="payDate" type="date" className="form-control" id="exampleFormControlInput1"
                               placeholder=""/>
                    </div>
                    <div className="mb-3 text-end mt-4">
                        <button type="submit" onClick={() => setIsRelease(false)} className="btn btn-warning">Draft
                        </button>
                        &nbsp;
                        <button type="submit" onClick={() => setIsRelease(true)} className="btn btn-success">Release
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
