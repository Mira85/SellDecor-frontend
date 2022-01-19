import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/index">
                <div>Index</div>
            </Link>
            <Link to="/profile">
                <div>Profile</div>
            </Link>
        </nav>
    )
}

export default Header;