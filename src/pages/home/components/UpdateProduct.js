import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function UpdateProduct() {

    const { id } = useParams()
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [categories, setCategories] = useState();
    const [startPrice, setStartPrice] = useState();
    const [depositAmount, setDepositAmount] = useState();
    const [highestBid, setHighestBid] = useState();
    const [bidDueDateTime, setBidDueDateTime] = useState();
    const [bidDueDate, setBidDueDate] = useState();
    const [bidDueTime, setBidDueTime] = useState();
    const [payDate, setPayDate] = useState();


    function getProductById(id) {
        const auction = {
            startPrice: 10,
            depositAmount: 10,
            highestBid: 10,
            bidDueDateTime: "2023-10-10 00:10:20",
            payDate: "2023-10-10",
            bids: [],
            winner: null

        }

        const productObj = {
            id,
            title: "test",
            description: "test",
            released: true,
            categories: [{ name: "test" }, { name: "test1" }],
            seller: null,
            auction
        }

        return productObj;
    }

    function handleUpdate(e) {
        e.preventDefault();

        const auction = {
            startPrice,
            depositAmount,
            highestBid,
            bidDueDateTime: bidDueDate + " " + bidDueTime,
            payDate,
            bids: [],
            winner: null

        }

        const productObj = {
            id,
            title,
            description,
            released: true,
            categories,
            seller: null,
            auction
        }

        console.log(productObj);

    }

    useEffect(() => {
        const product = getProductById(id);
        setTitle(product.title)
        setDescription(product.description)
        setCategories(product.categories)
        setHighestBid(product.auction.highestBid)
        setStartPrice(product.auction.startPrice)
        setDepositAmount(product.auction.depositAmount)
        setPayDate(product?.auction?.payDate)
        const date = product?.auction?.bidDueDateTime.split(" ")
        setBidDueDate(date[0])
        setBidDueTime(date[1])
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
                        <input value={title} name="title" type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category-names" className="form-label">Category</label><br />
                        <select name="categories" id="category-names" className="form-control" onChange={(e) => setCategories(e.target.value)}>
                            {categories?.map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Image url</label>
                        <input name="imageUrl" type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setImageUrl(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea value={description} name="description" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="container border-bottom mt-5">
                    <h2>Update auction</h2>
                </div>
                <div className="container mt-4">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Start price</label>
                        <input value={startPrice} name="startPrice" type="number" className="form-control" id="exampleFormControlInput1" onChange={(e) => setStartPrice(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Highest bid price</label>
                        <input value={highestBid} name="highestBid" type="number" className="form-control" id="exampleFormControlInput1" onChange={(e) => setHighestBid(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Deposite amount</label>
                        <input value={depositAmount} name="depositAmount" type="number" className="form-control" id="exampleFormControlInput1" onChange={(e) => setDepositAmount(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Bid due date</label>
                        <input value={bidDueDate} name="bidDueDate" type="date" className="form-control" id="exampleFormControlInput1" onChange={(e) => setBidDueDate(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Bid due time</label>
                        <input value={bidDueTime} name="bidDueTime" type="time" className="form-control" id="exampleFormControlInput1" onChange={(e) => setBidDueTime(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Payment due date</label>
                        <input value={payDate} name="payDate" type="date" className="form-control" id="exampleFormControlInput1" onChange={(e) => setPayDate(e.target.value)} />
                    </div>
                    <div className="mb-3 text-end mt-4">
                        <button type="submit" className="btn btn-warning">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
