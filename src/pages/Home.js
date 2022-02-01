import "./Home.scss";
function Home(props) {
    return (
        <div className="homeContainer">
            <div className="homeBckGround" style={{ backgroundImage: "url(/images/homepic.jpg)" }}>
                <div className="homeBox">
                    <div className="homeText">
                        <div className="homeTextArea">
                            <h1>Get Creative</h1>
                            <h2 style={{ color: "black", fontStyle: "italic" }}>Deals on Decor Items</h2>
                            <p>SellDecor is the place where you can buy used/unused decor items on sell at reasonable prices. Check out our site for great deals!</p>
                            <p>After an occasion, we all have decoration which we dont want to use again. Why not sell them! </p>
                            <p>To become a seller on SellDecor, create an account. </p>
                            <h3>Get Started Today !</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;