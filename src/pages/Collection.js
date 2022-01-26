// import { Link } from "react-router-dom";

// function Collection(props) {
//     console.log('collection props', props)

//     const loaded = () => {
//         console.log('im loaded')
//         return  <div>
       

//         <h1 className="indexHdr">Items to Sell</h1>
//     <div className="areaTable">
//         <table className="itemTable">
//             <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Category</th>
//                 <th>Image</th>
//                 <th>Price</th>
//             </tr>
//             </thead>
//             <tbody>
//             {props.dataForCategory.map((item) => {
//                 const { name, category, img, price } = item;
//                 return (
    
//                     <tr key={item._id} className="tb-row">
                
//                             <td>{name}</td>
//                             <td>{category}</td>
//                         <td><img src={img} alt={name} /></td>
//                         <td>{price}</td>
//                         <td><button onClick={()=>props.handleAddToCart(item)}>Add to cart</button><button onClick={() =>props.handleAddFavorite(item)}>favorite</button></td>
//                     </tr>
//                 )
//             })}
//             </tbody>
//         </table>
//     </div>
//     </div>

//     }

//     const loading = () => {
//         console.log('im loading')
//         return <h1>Loading...</h1>
//     };

//     return props.dataForCategory ? loaded() : loading()
  
// }

// export default Collection;
import { Link } from "react-router-dom";

function Collection(props) {
    console.log('collection props', props)

    
        console.log('im loaded')
        return  <div>
       

        <h1 className="indexHdr">Items to Sell</h1>
    <div className="areaTable">
        <table className="itemTable">
            <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Image</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {props.dataForCategory.map((item) => {
                const { name, category, img, price } = item;
                return (
    
                    <tr key={item._id} className="tb-row">
                
                            <td>{name}</td>
                            <td>{category}</td>
                        <td><img src={img} alt={name} /></td>
                        <td>{price}</td>
                        <td><button onClick={()=>props.handleAddToCart(item)}>Add to cart</button><button onClick={() =>props.handleAddFavorite(item)}>favorite</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
    </div>

    

    
  
}

export default Collection;