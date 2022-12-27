import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import NoMatch from "./pages/NoMatch/NoMatch";
import Cart from "./pages/Cart/Cart";
import { ShopContextProvider } from "./context/shop-context";
function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <div className="main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/*" element={<NoMatch />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
