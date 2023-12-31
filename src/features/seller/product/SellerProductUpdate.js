import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import store from "../../../redux/store";
import {updateProduct} from "./SellerProductSlice";
import {ROUTE} from "../../../constant/route";


export default function SellerProductUpdate() {

    const {id} = useParams()
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [categories, setCategories] = useState();
    const [startPrice, setStartPrice] = useState();
    const [released, setReleased] = useState();
    const [depositAmount, setDepositAmount] = useState();
    const [highestBid, setHighestBid] = useState();
    const [bidDueDate, setBidDueDate] = useState();
    const [bidDueTime, setBidDueTime] = useState();
    const [payDate, setPayDate] = useState();

    const navigate = useNavigate();

    function handleUpdate(e) {
        e.preventDefault();

        const product = {
            title,
            description,
            imageUrl,
            categories: [categories],
            released,
            startPrice,
            depositAmount,
            bidDueDateTime: bidDueDate + "T" + bidDueTime,
            payDate
        }

        console.log("Product: ", product);
        store.dispatch(updateProduct({id, product})).then((res) => {
            navigate(ROUTE.SELLER_PRODUCT)
        }).catch((e) => {
            console.log("error updateProduct:", e);
        });

    }

    useEffect(() => {
        const products = store.getState().sellerProducts.products;
        const productFound = products.filter(pro => pro.id == id);
        const product = productFound[0];
        setTitle(product?.title)
        setDescription(product?.description)
        setCategories(product?.categories[0])
        setImageUrl(product?.imageUrl)
        setReleased(product?.released)
        setHighestBid(product?.auction?.highestBid)
        setStartPrice(product?.auction?.startPrice)
        setDepositAmount(product?.auction?.depositAmount)
        setPayDate(product?.auction?.payDate)
        const date = product?.auction?.bidDueDateTime?.split("T")
        if (date) {
            setBidDueDate(date[0])
            setBidDueTime(date[1])
        }
    }, [])

    return (
        <div className="border border-1 p-5 m-5 rounded-3">
            <form onSubmit={handleUpdate}>
                <div className="container border-bottom">
                    <h2>Update product</h2>
                </div>
                <div className="container mt-4">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input value={title} name="title" type="text" className="form-control"
                               id="exampleFormControlInput1" onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category-names" className="form-label">Category</label><br/>
                        <select name="categories" id="category-names" className="form-control">
                            <option value="phone">Phone</option>
                            <option value="computer">Computer</option>
                            <option value="car">Car</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Image url</label>
                        <input value={imageUrl} name="imageUrl" type="text" className="form-control"
                               id="exampleFormControlInput1" onChange={(e) => setImageUrl(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea value={description} name="description" className="form-control"
                                  id="exampleFormControlTextarea1" rows="3"
                                  onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="container border-bottom mt-5">
                    <h2>Update auction</h2>
                </div>
                <div className="container mt-4">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Start price</label>
                        <input value={startPrice} name="startPrice" type="number" className="form-control"
                               id="exampleFormControlInput1" onChange={(e) => setStartPrice(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Highest bid price</label>
                        <input value={highestBid} name="highestBid" type="number" className="form-control"
                               id="exampleFormControlInput1" onChange={(e) => setHighestBid(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Deposite amount</label>
                        <input value={depositAmount} name="depositAmount" type="number" className="form-control"
                               id="exampleFormControlInput1" onChange={(e) => setDepositAmount(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Bid due date</label>
                        <input value={bidDueDate} name="bidDueDate" type="date" className="form-control"
                               id="exampleFormControlInput1" onChange={(e) => setBidDueDate(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Bid due time</label>
                        <input value={bidDueTime} name="bidDueTime" type="time" className="form-control"
                               id="exampleFormControlInput1" onChange={(e) => setBidDueTime(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Payment due date</label>
                        <input value={payDate} name="payDate" type="date" className="form-control"
                               id="exampleFormControlInput1" onChange={(e) => setPayDate(e.target.value)}/>
                    </div>
                    <div className="mb-3 text-end mt-4">
                        <button type="submit" className="btn btn-warning">Save</button>
                        &nbsp;
                        <button type="submit" className="btn btn-success" onClick={() => setReleased(true)}>Release
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
