import GlobalStyle from './assets/styles/global';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppProvider from './context'
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
  <BrowserRouter>
    <AppProvider>
      <Navbar/> 
      <ScrollToTop/>
      <Routes/>
      <Footer/>
    </AppProvider>
    <GlobalStyle/>
  </BrowserRouter>    
  );
}

export default App;
