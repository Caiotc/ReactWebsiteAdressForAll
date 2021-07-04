import GlobalStyle from './assets/styles/global';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Navbar from './components/Navbar';

function App() {
  return (
  <BrowserRouter>
    <Navbar/> 
    <Routes/>
    <GlobalStyle />
  </BrowserRouter>    
  );
}

export default App;
