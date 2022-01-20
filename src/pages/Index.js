import Collection from './Collection';
import Cart from './Cart';

function Index(props) {
    console.log('index props', props)
    return (
        <div>
                <div className="collection">
                    <Collection itemsArr={props}/>
                </div>
                <div className="cart">
                    <Cart />
                </div>
        </div>
    )

}

export default Index;