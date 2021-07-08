import GlobalStyle from './assets/styles/global';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppProvider from './context'

function App() {
  return (
  <BrowserRouter>
    <AppProvider>
      <Navbar/> 
      <Routes/>
      <Footer/>
    </AppProvider>
    <GlobalStyle/>
  </BrowserRouter>    
  );
}

export default App;
