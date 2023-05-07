import './styles/App.css';
import ViewData from './ViewData';
import Credits from './Credits';
import Cart from './Cart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProductData } from '../reducers/dataSlice';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

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
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link className="nav-link px-2 text-white" to="/">Home</Link></li>
                <li><Link className="nav-link px-2 text-white" to="/credits">Credits</Link></li>
                <li><Link className="nav-link px-2 text-white" to="/cart">Cart</Link></li>
              </ul>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<ViewData />}/>
          <Route path="/credits" element={<Credits />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <footer class="py-3 mt-4 bg-dark">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li><Link className="nav-link px-2 text-white" to="/">Home</Link></li>
                <li><Link className="nav-link px-2 text-white" to="/credits">Credits</Link></li>
                <li><Link className="nav-link px-2 text-white" to="/cart">Cart</Link></li>
          </ul>
          <p class="text-center text-white">© 2023 ShAmazon, Inc</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
