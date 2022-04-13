import { auth } from "./services/firebase";
import './App.css';
import { useEffect, useState, useRef } from "react";
//Import components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
 
  const URL_user = "https://selldecor-backend.herokuapp.com/user/";
  const URL_item = "https://selldecor-backend.herokuapp.com/item/";
  
  const getAllItemsRef = useRef();
  const getUserDataRef = useRef();

  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async user => {


      if (user) {
        const token = await user.getIdToken();
        const getUser = await fetch(URL_user, {
          headers: {
            "Authorization": "Bearer " + token
          }
        })
        const userInfo = await getUser.json();
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
  }, []);

  const [userItems, setUserItems] = useState({
    itemsData: [],
    favorites: [],
    profileSec: true

  })

  const [items, setItems] = useState({
    allItems: [],
    categoryItems: [],
    eachItem: [],
    cartData: [],
    value: true,
  });


  const getAllItems = async () => {
    const response = await fetch(URL_item)
    const data = await response.json();
    setItems({...items,
      allItems: data,
      value: true,
    });
  }

  useEffect(() => {
    getAllItemsRef.current = getAllItems;
  })

  useEffect(() => {
    getAllItemsRef.current(); 
  }, []);


  const getUserData = async () => {
    
    if (!user) return;
    const token = await user.getIdToken();
    const response = await fetch(URL_user + "userinfo", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    });

    const data = await response.json();
    setUserItems({...userItems,
      itemsData: data.itemsToSell,
      favorites: data.favorites,
    });
   
  }

  const createItem = async (createdItem) => {
    if (!user) return;
    const token = await user.getIdToken();
    //conversion of price(string) to number
    createdItem.price = parseInt(createdItem.price);
    await fetch(URL_item, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(createdItem),
    });
    getUserData();
    getAllItems();
  }

  const updateItem = async (item) => {
    const token = await user.getIdToken();
    await fetch(URL_item + item._id, {
      method: "PUT",
      headers: {
        "content-Type": "Application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(item)
    });
    getUserData();
    getAllItems();
  }

  const deleteItem = async (id) => {
    const token = await user.getIdToken();
    await fetch(URL_item + id, {
      method: 'DELETE',
      headers: {
        "Authorization": "Bearer " + token
      },
    })
    getUserData();
    getAllItems();
  }


  const handleUpdate = (itm) => {
    const updateItem = { ...items, eachItem: itm, value: !items.value };
    setItems(updateItem);
  }

  const handleClickBtn = async (category) => {
    const categoryItems = items.allItems.filter(item => category ===  item.category);
    setItems({
      ...items,
      categoryItems: categoryItems,
    });
  }

  const handleAddToCart = (itemToAdd) => {
    items.cartData.push(itemToAdd);
    setItems({ ...items });
  };


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

  getUserData();
}


const handleDeleteFavorite = async (item) => {
  const token = await user.getIdToken();
  await fetch(URL_user+"delete_favorite?item_id=" + item._id, {
    method: 'DELETE',
    headers: {
      "Authorization": "Bearer " + token
    },
  })
  getUserData();
}

const handleFavoriteSec = (boolean) => {
  const favoriteSec = { ...userItems, profileSec: boolean };
  setUserItems(favoriteSec);

};
 const handleDeleteCartItem =(cartItem) => {
     const newCartData = items.cartData.filter(item => item.name !== cartItem.name)
     setItems({...items, cartData:newCartData})
 }


useEffect(() => {
  getUserDataRef.current = getUserData;
})


useEffect(() => {
  if (user) {
    getUserDataRef.current();
  }
}, [user]);

return (
  <div className="App">
    <Header handleClickBtn={handleClickBtn}
      user={user} />
    <Main {...items}
    {...userItems}
      getUserData={getUserData}
      createItem={createItem}
      updateItem={updateItem}
      handleUpdate={handleUpdate}
      deleteItem={deleteItem}
      handleAddToCart={handleAddToCart}
      handleAddFavorite={handleAddFavorite}
      handleDeleteFavorite={handleDeleteFavorite}
      handleFavoriteSec={handleFavoriteSec}
      handleDeleteCartItem={handleDeleteCartItem}
      user={user} />
    <Footer />
  </div>
);
}

export default App;
