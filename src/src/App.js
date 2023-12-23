import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.js/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoría'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
         </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
