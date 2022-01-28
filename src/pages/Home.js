import "./Home.scss";
function Home(props) {
    return (
        <div className="homeContainer">
        
            <div className="homeBckGround" style={{ backgroundImage: "url(/images/homepic.jpg)"}}>
                
                <div className="homeBox">
                    <div className="homeText">
                        <h2>Occasion over ?</h2>
                        Sell your decoration or buy other decor items at reasonable prices

                    </div>

                </div>
            </div>
            </div>
    );
}

export default Home;