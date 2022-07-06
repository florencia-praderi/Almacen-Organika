import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from './components/context/ThemeContext';
import Home from './pages/Home';
import Detail from './pages/Detail'
import Catalog from './pages/Catalog'
import NotFound from './pages/NotFound'
import FindUs from './pages/FindUs'
import Cart from './pages/Cart'
import { CartProvider } from './components/context/CartContext';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <CartProvider>
    <ThemeProvider>      
      <BrowserRouter>
      <NavBar/>   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Catalog/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
        <Route path='/products/:category' element={<Catalog/>}/>
        <Route path='/contact' element={<FindUs/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </ThemeProvider>
    </CartProvider>
    </div>    
  );
}

export default App;
