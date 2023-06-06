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
import { useState } from 'react';

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExists = cartItems.find((item) => item.id === product.id);
    if (ProductExists){
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...ProductExists, quantity: ProductExists.quantity + 1}: item ));

    }
    else{
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }

  };

  const handleRemoveProduct = (product) => {
    const ProductExists = cartItems.find((item) => item.id === product.id);
    if (ProductExists.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? 
        {...ProductExists, quantity: ProductExists.quantity - 1} : item));
    }
  };

  const clearProduct = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element ={ <Home/>}/>
        <Route path='/product/:id' element ={ <Product/>}/>
        <Route path='/products' element ={ <Products handleAddProduct={handleAddProduct}/>}/>
        <Route path='/about' element ={ <About/>}/>
        <Route path='/cart' element ={ <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} clearProduct={clearProduct}/> }/>

        <Route path='/login' element ={ <Login/>}/>
        <Route path='/signup' element ={ <Signup/>}/>

        <Route path='*' element ={ <Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
