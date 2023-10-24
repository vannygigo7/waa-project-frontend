import { Link, useNavigate } from "react-router-dom";
import logoIcon from "../assets/images/logo.svg"
import { loginService } from "../services/authService";
import { ROUTE } from "../constant/route";
import { showToast } from "../utils/utilFunctions";
import {ToastContainer} from "react-toastify";

export default function LoginForm() {

    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const body = {};
        for (const [key, value] of form.entries()) {
            body[key] = value;
        }
        
        loginService(body)
            .then(res => {
                if (res.data.message === "SUCCESS"){
                    localStorage.setItem("isLogin", true)
                    const user = res.data.data;
                    localStorage.setItem("user", JSON.stringify(user))
                    if (res.data.data.role === "USER") {
                        navigate(ROUTE.HOME)
                    }
                    if (res.data.data.role === "SELLER") {
                        navigate(ROUTE.SELLER_HOME)
                    }
                }
            }).catch((e)=>{
                showToast(e.response.status, e.message);
            })
    }

    return (
        <div className="container">
            <div className="mx-auto py-4 my-3" style={{ width: "400px" }}>
                <div className="text-center mt-5 mb-3">
                    <Link to={`/`}>
                        <img src={logoIcon} className="rounded" alt="..." style={{ width: "100px" }} />
                    </Link>
                    <h2 className="mt-4" style={{ color: "#01377D" }}>Login</h2>
                </div>
                <form className="border border-1 py-4 px-4 rounded-3" onSubmit={handleLogin}>
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
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
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
                        <button type="submit" className="btn primary-btn mt-2">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
}