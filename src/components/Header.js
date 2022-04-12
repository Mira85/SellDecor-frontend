import { login, logout } from "../services/firebase";
import { Link } from "react-router-dom";
import "./Header.scss";
import { GiHamburgerMenu} from "react-icons/gi";


function Header(props) {


    return (
        <nav className="nav">
            <div className="loginArea">

                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/profile">
                    <div>Profile</div>
                </Link>
                {
                    props.user ?
                        <button onClick={logout}>Logout</button>
                        :
                        <button onClick={login}>Login</button>
                }
            </div>
            <div className="appName">
                <div>SellDecor</div>
            </div>
            <div className="subNav">
                <Link to="/collection">
                    <button className="navLinks" onClick={() => props.handleClickBtn("party")}>Party</button>
                </Link>
                <Link to="/collection">
                    <button className="navLinks" onClick={() => props.handleClickBtn("christmas")}>Christmas</button>
                </Link>
                <Link to="/collection">
                    <button className="navLinks" onClick={() => props.handleClickBtn("halloween")}>Halloween</button>
                </Link>
                <Link to="/collection">
                    <button className="navLinks" onClick={() => props.handleClickBtn("easter")}>Easter</button>
                </Link>
                <Link to="/collection">
                    <button className="navLinks" onClick={() => props.handleClickBtn("valentines day")}>Valentines Day</button>
                </Link>
            </div>
            <hr />
        </nav>
    )
}

export default Header;