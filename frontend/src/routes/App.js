import './styles/App.css';
import ViewData from './ViewData';
import Credits from './Credits';
import Cart from './Cart';
import ProductPage from './ProductPage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductData } from '../reducers/dataSlice';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("Home");
  const originalData = useSelector((state) => state.data.originalData);
  
  const toysCategory = () => {
    dispatch(setProductData(originalData.filter((product) => (product.category.includes("Toys") || product.category.includes("Games")))));
  };
  const artsCategory = () => {
      dispatch(setProductData(originalData.filter((product) => (product.category.includes("Arts") || product.category.includes("Crafts")))));
  };
  const hobbiesCategory = () => {
      dispatch(setProductData(originalData.filter((product) => product.category.includes("Hobbies"))));
  };
  const puzzlesCategory = () => {
      dispatch(setProductData(originalData.filter((product) => (product.category.includes("Arts") || product.category.includes("Crafts")))));
  };
  const sportsCategory = () => {
      dispatch(setProductData(originalData.filter((product) => (product.category.includes("Sports") || product.category.includes("Outdoors")))));
  };
  const homeDecCategory = () => {
      dispatch(setProductData(originalData.filter((product) => product.category.includes("Home Décor"))));
  };
  const decorCategory = () => {
      dispatch(setProductData(originalData.filter((product) => product.category.includes("Décor"))));
  };
  const furnitureCategory = () => {
      dispatch(setProductData(originalData.filter((product) => product.category.includes("Furniture"))));
  };
  const learningCategory = () => {
      dispatch(setProductData(originalData.filter((product) => (product.category.includes("Learning") || product.category.includes("Education")))));
  };
  const officeCategory = () => {
      dispatch(setProductData(originalData.filter((product) => (product.category.includes("Office")))));
  };
  const schoolCategory = () => {
      dispatch(setProductData(originalData.filter((product) => (product.category.includes("School")))));
  };
  
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
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 grid justify-content-start align-items-center mb-md-0 fs-3 fw-bold">
              <li>
                <img src={"../logo/png/logo-white.png"} alt="ShAmazon logo" className="logo me-4"/>
              </li>
              {active === "Home" ? <li><Link className="nav-link px-2 text-white fw-normal" to="/" onClick={() => {setActive("Home")}}>Home</Link></li>: 
              <li><Link className="nav-link px-4 text-white" to="/" onClick={() => {setActive("Home")}}>Home</Link></li>}
              {active === "Credits" ? <li><Link className="nav-link px-2 text-white fw-normal" to="/credits" onClick={() => {setActive("Credits")}}>Credits</Link></li> :
              <li><Link className="nav-link px-4 text-white" to="/credits" onClick={() => {setActive("Credits")}}>Credits</Link></li>}
              {active === "Cart" ? <li><Link className="nav-link px-2 text-white fw-normal" to="/cart" onClick={() => {setActive("Cart")}}>Cart</Link></li> :
              <li><Link className="nav-link px-4 text-white" to="/cart" onClick={() => {setActive("Cart")}}>Cart</Link></li>}
            </ul>
            <hr/>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="#products" className="bcItem" onClick={() => toysCategory()}>Toys & Games</a></li>
                <li className="breadcrumb-item"><a href="#products" className="bcItem" onClick={() => artsCategory()}>Arts & Crafts</a></li>
                <li className="breadcrumb-item"><a href="#products" className="bcItem" onClick={() => hobbiesCategory()}>Hobbies</a></li>
                <li className="breadcrumb-item"><a href="#products" className="bcItem" onClick={() => puzzlesCategory()}>Puzzles</a></li>
                <li className="breadcrumb-item"><a href="#products" className="bcItem" onClick={() => sportsCategory()}>Sports & Outdoors</a></li>
                <li className="breadcrumb-item"><a href="#products" className="bcItem" onClick={() => homeDecCategory()}>Home Décor</a></li>
                <li className="breadcrumb-item"><a href="#products" className="bcItem" onClick={() => decorCategory()}>Décor</a></li>
                <li className="breadcrumb-item"><a href="#products" className="bcItem" onClick={() => furnitureCategory()}>Furniture</a></li>
                <li className="breadcrumb-item"><a href="#products" className="bcItem" onClick={() => learningCategory()}>Learning & Education</a></li>
                <li className="breadcrumb-item"><a href="#products" className="bcItem" onClick={() => officeCategory()}>Office</a></li>
                <li className="breadcrumb-item"><a href="#products" className="bcItem" onClick={() => schoolCategory()}>School</a></li>
              </ol>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<ViewData />}/>
          <Route path="/credits" element={<Credits />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/:id" element={<ProductPage />}/>
        </Routes>
        <footer className="py-3 bg-dark footer">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li><Link className="nav-link px-2 text-white" to="/">Home</Link></li>
                <li><Link className="nav-link px-2 text-white" to="/credits">Credits</Link></li>
                <li><Link className="nav-link px-2 text-white" to="/cart">Cart</Link></li>
          </ul>
          <p className="text-center text-white">© 2023 ShAmazon</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
