/* import logo from './logo.svg'; */
// import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
function App() {
  const [items,setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"
  },
  {
      id: 2,
      checked: false,
      item: "Item 2"
  },
  {
      id: 3,
      checked: false,
      item: "Item 3"
  }
  ]);
  const [newItems,setNewItems]=useState('');
  const addItem = (item) => {
    const id = items.length?item[item.length-1].id+1:1;
    const newItem = {id, checked: false, item};
    const list = [...items, newItem];
    setItems(list);
    localStorage.setItem('shoppinglist', JSON.stringify(list));
  }
  const handleCheck = (id) => {
    const list = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(list);
    localStorage.setItem('shoppinglist', JSON.stringify(list));
  }
  const handleDelete = (id) => {
    const list = items.filter((item)=>item.id!==id);
    setItems(list);
    localStorage.setItem('shoppinglist', JSON.stringify(list));
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItems) return;
    console.log("Submitted");
  }
  const name = "yamin";
  return (
    <div className="App">
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}!
        </p>
      </header> */}
      <Header title='Grocery List'></Header>
      <AddItem
      newItems={newItems}
      setNewItems={setNewItems}
      handleSubmit={handleSubmit}
      ></AddItem>
    <Content
    items={items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}
    ></Content>
    <Footer
    length={items.length}
    ></Footer>
    </div>
  );
}

export default App;
