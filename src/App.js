/* import logo from './logo.svg'; */
// import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import SearchItem from './SearchItem';
import { useState, useEffect} from 'react';
import AddItem from './AddItem';
function App() {
  const API_URL='http://localhost:3500/items';
  // const [items,setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")) || []);
  const [items,setItems] = useState([]);
  const [newItems,setNewItems]=useState('');
  const [search, setSearch] = useState('');
  const [fetchError,setFetchError] = useState(null);
  // useEffect(()=>{
  //   localStorage.setItem('shoppinglist', JSON.stringify(items));
  // },[items])
  useEffect(()=>{
    const fetchItems = async () => {
      try {
        if(!response.ok) throw Error("Did not receive expected data!");
        const response = await fetch(API_URL);
        const listitems = await response.json();
        console.log("Hello");
        setItems(listitems);
      } catch (error) {
        setFetchError(error.message);
      }
    }
    fetchItems();
  }, []);
  const addItem = (item) => {
    const id = items.length?items[items.length-1].id+1:1;
    const newItem = {id, checked: false, item};
    const list = [...items, newItem];
    setItems(list);
  }
  const handleCheck = (id) => {
    const list = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(list);
  }
  const handleDelete = (id) => {
    const list = items.filter((item)=>item.id!==id);
    setItems(list);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItems) return;
    addItem(newItems);
    setNewItems('');
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
      <SearchItem 
      search={search}
      setSearch={setSearch}
      >
      </SearchItem>
    <Content
    items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
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
