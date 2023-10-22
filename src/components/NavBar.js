import { Link } from "react-router-dom";
import logoIcon from "../assets/images/logo.svg"

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="navbar-brand" src={logoIcon} style={{ width: "70px", height: "70px", marginLeft: "100px" }} />
                    <div className="d-flex" style={{ marginRight: "100px" }}>
                        <Link to={`/login`}>
                        <button className="btn primary-btn" style={{ marginRight: "10px" }}>Login</button>
                        </Link>
                        <Link to={`/register`}>
                        <button className="btn signup-btn">Join us</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}