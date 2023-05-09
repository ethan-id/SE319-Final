import './styles/App.css';
import ViewData from './ViewData';
import Credits from './Credits';
import Cart from './Cart';
import ProductPage from './ProductPage';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProductData } from '../reducers/dataSlice';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("Home");
  
  useEffect(() => {
    fetch("http://localhost:4000/")
    .then((response) => response.json())
    .then((data) => {
      dispatch(setProductData(data));
    });
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
      
        <header className="p-3 text-bg-dark">
          <div className="container">
            <div className="d-flex align-items-center justify-content-center">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fs-3 fw-bold">
                {active === "Home" ? <li><Link className="nav-link px-2 text-white fw-normal" to="/" onClick={() => {setActive("Home")}}>Home</Link></li>: 
                <li><Link className="nav-link px-2 text-white" to="/" onClick={() => {setActive("Home")}}>Home</Link></li>}
                {active === "Credits" ? <li><Link className="nav-link px-2 text-white fw-normal" to="/credits" onClick={() => {setActive("Credits")}}>Credits</Link></li> :
                <li><Link className="nav-link px-2 text-white" to="/credits" onClick={() => {setActive("Credits")}}>Credits</Link></li>}
                {active === "Cart" ? <li><Link className="nav-link px-2 text-white fw-normal" to="/cart" onClick={() => {setActive("Cart")}}>Cart</Link></li> :
                <li><Link className="nav-link px-2 text-white" to="/cart" onClick={() => {setActive("Cart")}}>Cart</Link></li>}
              </ul>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<ViewData />}/>
          <Route path="/credits" element={<Credits />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/:id" element={<ProductPage />}/>
        </Routes>
        <footer class="py-3 bg-dark footer">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li><Link className="nav-link px-2 text-white" to="/">Home</Link></li>
                <li><Link className="nav-link px-2 text-white" to="/credits">Credits</Link></li>
                <li><Link className="nav-link px-2 text-white" to="/cart">Cart</Link></li>
          </ul>
          <p class="text-center text-white">© 2023 ShAmazon</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
