import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from './components/context/ThemeContext';
import Home from './pages/Home';
import Detail from './pages/Detail'
import Catalog from './pages/Catalog'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import { CartProvider } from './components/context/CartContext';

function App() {
  return (
    <div className="App">
    <CartProvider>
    <ThemeProvider>      
      <BrowserRouter>
      <NavBar/>   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
        <Route path='/products/:category' element={<Catalog/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </CartProvider>
    </div>    
  );
}

export default App;
