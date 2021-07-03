import GlobalStyle from './assets/styles/global';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer'

function App() {
  return (
  <BrowserRouter>
    <Navbar/> 
    <Routes/>
    <Footer/>    
    <GlobalStyle />
  </BrowserRouter>    
  );
}

export default App;
