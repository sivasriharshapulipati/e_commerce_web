import React from 'react';
// import reat router dom 
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
//import pages 
import Home from './pages/Home';
import ProductionDetails from './pages/ProductDetails';
//import components 
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/product/:id' element =
        {<ProductionDetails />}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  </div>;
};

export default App;
