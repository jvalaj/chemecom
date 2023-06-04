import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Cart from './pages/cart';
import Login from './pages/login';
import Signup from './pages/signup';
import Product from './pages/product';
import Products from './pages/products';
import Error from './pages/error';
import Navbar from './components/navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element ={ <Home/>}/>
        <Route path='/product/:id' element ={ <Product/>}/>
        <Route path='/products' element ={ <Products/>}/>
        <Route path='/about' element ={ <About/>}/>
        <Route path='/cart' element ={ <Cart/>}/>

        <Route path='/login' element ={ <Login/>}/>
        <Route path='/signup' element ={ <Signup/>}/>

        <Route path='*' element ={ <Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
