import GlobalStyle from './assets/styles/global';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
  <BrowserRouter>
    <Navbar/> 
    <Routes/>
    <GlobalStyle />
    <Footer/>
  </BrowserRouter>    
  );
}

export default App;
