import { Link } from "react-router-dom";
import logoIcon from "../assets/images/logo.svg"

export default function RegisterForm() {

    function handleRegister(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log({ email, password });
        const body = {};
        for (const [key, value] of form.entries()) {
            body[key] = value;
        }
        console.log(body);
        // Do Further input validation and submit the form
    }

    return (
        <div className="container">
            <div className="mx-auto py-5 my-3" style={{ width: "400px" }}>
                <div className="text-center mb-3">
                    <Link to={`/`}>
                        <img src={logoIcon} className="rounded" alt="..." style={{ width: "100px" }} />
                    </Link>
                    <h2 className="mt-4" style={{ color: "#01377D" }}>Register</h2>
                </div>
                <form className="border border-1 py-4 px-4 rounded-3" onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender-list" className="form-label"> Gender</label><br />
                        <select name="gender" id="gender-list" className="form-control">
                            <option value="male"></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role-names" className="form-label">Role</label><br />
                        <select name="roles" id="role-names" className="form-control">
                            <option value="both"></option>
                            <option value="customer">Customer</option>
                            <option value="seller">Seller</option>
                            <option value="both">Both</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            aria-describedby="loginHelp"
                        />
                        <div id="loginHelp" className="form-text text-center">
                            Already have account? &nbsp;
                            <Link to={`/login`}>
                                Login
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn primary-btn mt-2">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}