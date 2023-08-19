import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import NavbarPanel from "./components/NavbarPanel";

function App() {
  return (
    <>
    
      <Router>
      <NavbarPanel />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
