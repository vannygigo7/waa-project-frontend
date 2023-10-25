import { Link, useNavigate } from "react-router-dom";
import logoIcon from "../assets/images/logo.svg"
import { useEffect, useState } from "react";
import { ROUTE } from "../constant/route";

export default function NavBar() {

    const isLogin = localStorage.getItem("isLogin");
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin !== undefined && isLogin === "true") {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                setUser(user);
            }
        }
    }, [])

    const handleLogout = () => {
        localStorage.clear("isLogin");
        localStorage.clear("user");
        navigate(ROUTE.LANDING)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    <img className="navbar-brand" src={logoIcon} style={{ width: "70px", height: "70px", marginLeft: "100px" }} />
                    {isLogin === "true" ? (
                        <div className="d-flex" style={{ marginRight: "100px" }}>
                            <img src={user?.profileImageUrl} className="rounded-circle" alt="..." style={{ width: "50px", height: "50px" }}></img>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="mt-3">{user?.firstName}&nbsp;{user?.lastName}</label> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => handleLogout()} className="btn signup-btn" style={{ marginRight: "10px"}}>Logout</button>
                        </div>
                    ) : (
                        <div className="d-flex" style={{ marginRight: "100px" }}>
                            <Link to={`/login`}>
                                <button className="btn primary-btn" style={{ marginRight: "10px" }}>Login</button>
                            </Link>
                            <Link to={`/register`}>
                                <button className="btn signup-btn">Join us</button>
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}