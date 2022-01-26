import { login, logout } from "../services/firebase";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {


    return (
        <nav className="nav">
            <div className="mainNav">
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
            <div className="subNav">
            <Link to="/collection">
            <button onClick={()=> props.handleClickBtn("party")}>Party</button>
            </Link>
            <Link to="/collection">
            <button onClick={()=> props.handleClickBtn("christmas")}>Christmas</button>
            </Link>
            <Link to="/collection">
            <button onClick={()=> props.handleClickBtn("halloween")}>Halloween</button>
            </Link>
            <Link to="/collection">
            <button onClick={()=> props.handleClickBtn("easter")}>Easter</button>
            </Link>
            <Link to="/collection">
            <button onClick={()=> props.handleClickBtn("valentines day")}>Valentines Day</button>
            </Link>
                </div>
               
        
        </nav>
    )
}

export default Header;