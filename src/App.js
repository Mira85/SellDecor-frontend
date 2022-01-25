import { auth } from "./services/firebase";
import './App.css';
import { useEffect, useState } from "react";
//Import components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const URL_item = "http://localhost:3001/item/";
  const URL_user = "http://localhost:3001/user/";

  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async user => {


      if (user) {
        const token = await user.getIdToken();
        console.log(token);

        const getUser = await fetch(URL_user, {
          headers: {
            "Authorization": "Bearer " + token

          }
        })
        const userInfo = await getUser.json();
        console.log('userinfo', userInfo)
        if (!userInfo) {
          await fetch(URL_user, {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
              "Authorization": "Bearer " + token

            },
            body: JSON.stringify(user),
          });

        }

      }

      setUser(user);
    })
  }, [])

  const [items, setItems] = useState({
    categoryData: [],
    itemsData: [],
    eachItem: [],
    cartData: [],
    value: true,
    value: true,
    favorites: []
  });



  //const URL ="https://selldecor-backend.herokuapp.com/item";

  const getItems = async (category) => {
    //const response = await fetch(URL +"?category=party" );
    if (!user) return;
    const token = await user.getIdToken();

    const response = await fetch(URL_user + "userinfo", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    });

    const data = await response.json();
    setItems({
      categoryData: [],
      itemsData: data.itemsToSell,
      eachItem: [],
      cartData: [],
      value: true,
      favorites: data.favorites
    });
    console.log('itemstate', items)
  }

  const createItem = async (createdItem) => {
    if (!user) return;
    const token = await user.getIdToken();
    //conversion of price(string) to number
    createdItem.price = parseInt(createdItem.price);
    console.log("itemtosell", createdItem.price)
    await fetch(URL_item, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(createdItem),
    });
    getItems();
  }

  const updateItem = async (item) => {
    const token = await user.getIdToken();
    console.log('updateditem', item)
    await fetch(URL_item + item._id, {
      method: "PUT",
      headers: {
        "content-Type": "Application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(item)
    });
    getItems();
  }

  const deleteItem = async (id) => {
    const token = await user.getIdToken();
    await fetch(URL_item + id, {
      method: 'DELETE',
      headers: {
        "Authorization": "Bearer " + token
      },
    })
    getItems();
  }


  const handleUpdate = (itm) => {
    console.log('clicked')
    const updateItem = { ...items, eachItem: itm, value: !items.value };
    setItems(updateItem);
  }

  const handleClickBtn = async (category) => {
    const token = await user.getIdToken();
    const response = await fetch(URL_item + category, {
      headers: {
        "Authorization": "Bearer " + token
      }
    });

    const dataForCategory = await response.json();
    setItems({
      ...items,
      categoryData: dataForCategory,
      eachItem: [],
      value: true
    });
  }

  const handleAddToCart = (itemToAdd) => {
    items.cartData.push(itemToAdd);
    setItems({ ...items });
  };

  /* async function getFavorites() {
    const[favorites, setFavorites] = useState(items);
    const response = await fetch(URL_user+"userinfo", {
      method:"GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    });
    
    const data = await response.json();
    setFavorites({...favorites, 
        favorites: data.favorites
    }); */



const handleAddFavorite = async (favoriteItem) => {
  const token = await user.getIdToken();
  await fetch(URL_user + "add_favorite?item_id=" + favoriteItem._id, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(favoriteItem),
  });


  const response = await fetch(URL_user + "userinfo", {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  });

  const data = await response.json();

  setItems({
    ...items,
    favorites: data.favorites,
  });
}



useEffect(() => {
  if (user) {
    getItems()
  }
}, [user]);

return (
  <div className="App">
    <Header handleClickBtn={handleClickBtn}
      user={user} />
    <Main {...items}
      getItems={getItems}
      createItem={createItem}
      updateItem={updateItem}
      handleUpdate={handleUpdate}
      deleteItem={deleteItem}
      handleAddToCart={handleAddToCart}
      handleAddFavorite={handleAddFavorite}
      user={user} />
    <Footer />


  </div>
);
}

export default App;
