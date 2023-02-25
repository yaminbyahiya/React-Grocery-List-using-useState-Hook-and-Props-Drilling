/* import logo from './logo.svg'; */
// import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
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
