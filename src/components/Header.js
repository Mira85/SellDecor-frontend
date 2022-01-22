import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {


    return (
        <nav className="nav">
            <div className="mainNav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/index">
                <div>Index</div>
            </Link>
            <Link to="/profile">
                <div>Profile</div>
            </Link>
            </div>
            <div className="subNav">
                    <button onClick={()=> props.handleClickBtn("party")}>party</button>
                    <button onClick={()=> props.handleClickBtn("christmas")}>christmas</button>
                </div>
               
        
        </nav>
    )
}

export default Header;