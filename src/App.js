import './App.css';
import { useEffect, useState } from "react";
//Import components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const [items, setItems] = useState({
    categoryData: [],
    itemsData :[],
    eachItem:[],
    cartData:[],
    value: true
});


const URL ="http://localhost:3001/item/";
//const URL ="https://selldecor-backend.herokuapp.com/item";

const getItems = async (category) => {
//const response = await fetch(URL +"?category=party" );
const response = await fetch(URL);
const data = await response.json();
setItems({
    categoryData: [],
    itemsData : data,
    eachItem:[],
    cartData:[],
    value: true
});
console.log('itemstate', items)
}

const createItem = async(createdItem) => {
  //conversion of price(string) to number
  createdItem.price = parseInt(createdItem.price);
  console.log("itemtosell", createdItem.price)
  await fetch(URL, {
     method: "POST",
     headers: {
         "Content-Type": "Application/json",
     },
     body: JSON.stringify(createdItem),
  });
  getItems();
}

const updateItem = async(item) => {
  console.log('updateditem', item)
  await fetch(URL + item._id, {
      method: "PUT",
      headers: {
          "content-Type": "Application/json"
      },
      body: JSON.stringify(item)
  });
  getItems();
}

const deleteItem = async (id) => {
  await fetch(URL + id, {
      method: 'DELETE'
  })
  getItems();
}


const handleUpdate = (itm) => {
  console.log('clicked')
  const updateItem = {...items, eachItem:itm, value:!items.value};
  setItems(updateItem);
}

const handleClickBtn = async (category) => {
  const response = await fetch(URL+"?category="+ category);
  const dataForCategory = await response.json();
  setItems({...items,
      categoryData : dataForCategory,
      eachItem:[],
      value: true
  });
}

const handleAddToCart = (itemToAdd) => {
  items.cartData.push(itemToAdd);
  setItems({...items});
};

useEffect(() => getItems(), [])
  
  return (
    <div className="App">
      <Header handleClickBtn={handleClickBtn}/>
      <Main {...items} 
      getItems={getItems}
      createItem={createItem} 
      updateItem={updateItem}
      handleUpdate={handleUpdate}
      deleteItem={deleteItem}
      handleAddToCart={handleAddToCart} />
      <Footer />
     
     
    </div>
  );
}

export default App;
