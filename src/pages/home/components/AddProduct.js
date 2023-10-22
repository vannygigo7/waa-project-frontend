import { useState } from "react"; 


export default function AddProduct() {

    const [isRelease, setIsRelease] = useState(false);

    function handleGetDataAndSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // const title = form.get("title");
        // const description = form.get("description");
        // console.log({ title, description });
        const body = {};
        for (const [key, value] of form.entries()) {
            body[key] = value;
        }
        console.log(body);
        // Do Further input validation and submit the form

        if(isRelease){
            onRelease();
        }else{
            onDraft();
        }
    }

    function onRelease(){
        console.log("onRelease called");
        // Further implementation here
    }

    function onDraft(){
        console.log("onDraft called");
        // Further implementation here
    }

    return (
        <div className="border border-1 p-5 m-5 rounded-3">
            <form onSubmit={handleGetDataAndSubmit}>
                <div className="container border-bottom">
                    <h2>Add new product</h2>
                </div>
                <div className="container mt-4">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input name="title" type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category-names" className="form-label">Category</label><br />
                        <select name="categoryNames" id="category-names" className="form-control">
                            <option value="other"></option>
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div className="container border-bottom mt-5">
                    <h2>Add auction</h2>
                </div>
                <div className="container mt-4">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Start price</label>
                        <input name="startPrice" type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Highest bid price</label>
                        <input name="highestBid" type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Deposite amount</label>
                        <input name="depositAmount" type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Bid due date</label>
                        <input name="bidDueDate" type="date" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Bid due time</label>
                        <input name="bidDueTime" type="time" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Pay date</label>
                        <input name="payDate" type="date" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="mb-3 text-end mt-4">
                        <button type="submit" onClick={() => setIsRelease(false)} className="btn btn-danger">Draft</button> &nbsp;
                        <button type="submit" onClick={() => setIsRelease(true)} className="btn btn-success">Release</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
