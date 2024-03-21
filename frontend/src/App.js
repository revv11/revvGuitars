import Navbar from './components/Navbar/Navbar'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import intervals from './components/Assets/intervals.jpg'
import tim from './components/Assets/tim.jpg'
import alexi from './components/Assets/alexibanner.png'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/schecter" element={<Category banner={intervals} brand= "schecter"/>}></Route>
        <Route path="/ibanez" element={<Category banner={tim} brand = "ibanez"/>}></Route>
        <Route path="/esp" element={<Category banner={alexi} brand ="esp"/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}></Route>
        </Route>
        <Route path="/signup" element={<Login/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>

    <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
