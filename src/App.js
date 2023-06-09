import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LSide from "./layouts/Login-side";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Admindb from "./pages/AdminDB/admindb";
import Userdb from "./pages/UserDB/userdb";
import AddStock from "./pages/AddStock/AddStock";
import Checkout from "./pages/CheckoutStock/Checkout";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<Login />} />
          <Route path="/admin_dashboard" element={<Admindb />} />
          <Route path="/user_dashboard" element={<Userdb />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add_stock" element={<AddStock />} />
          <Route path="/checkout_stock" element={<Checkout />} />

          {/* <LSide/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
