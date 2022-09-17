import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartContainer from "./containers/CartContainer";

function App() {
  const brandName = "Chaos PC";
  return (
    <BrowserRouter>
      <NavBar 
        brand ={brandName}
      />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/detail/:productId" element={<ItemDetailContainer/> } />
        <Route path="/cart" element={<CartContainer/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;