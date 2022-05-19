import './App.css';
import NavBar from './components/NavBar/NavBar'
import Button from '@mui/material/Button';
import CardItem  from './components/Card/Card'
import CardList from './components/CardList/CardList'
import { Container, Grid } from '@mui/material'
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar/>   
      <button className='banner-header'>¡Con tarjetas Santander tenes hasta un 15% de descuento! *Hacé click acá para conocer más detalles</button>
      <div className='general-container'>
      <CardList/>        
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
