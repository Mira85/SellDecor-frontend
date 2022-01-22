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
            <button onClick={()=> props.handleClickBtn("baby Shower")}>Christmas</button>
            </Link>
                </div>
               
        
        </nav>
    )
}

export default Header;