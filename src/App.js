import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from './pages/Home';
import Detail from './pages/Detail'
import Catalog from './pages/Catalog'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
      <NavBar/>   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
        <Route path='/product/:category' element={<Catalog/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
