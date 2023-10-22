import { Link } from "react-router-dom";
import logoIcon from "../assets/images/logo.svg"

export default function LoginForm() {
    return (
        <div className="container">
            <div className="mx-auto py-5 my-3" style={{ width: "400px" }}>
                <div class="text-center mt-5 mb-3">
                    <Link to={`/`}>
                        <img src={logoIcon} className="rounded" alt="..." style={{ width: "100px" }} />
                    </Link>
                    <h2 className="mt-4" style={{ color: "#01377D" }}>Login</h2>
                </div>
                <form className="border border-1 py-4 px-4 rounded-3">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        {/* <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            aria-describedby="signupHelp"
                        />
                        <div id="signupHelp" className="form-text text-center">
                            New member? &nbsp;
                            <Link to={`/register`}>
                            Join us now.
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn primary-btn mt-2">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}