import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./pages/Register";
import Forgotpass from "./components/Forgotpass";
import Home from "./pages/Home";
import Resetpassword from "./components/Resetpass";
import VerifyOtp from "./components/VerifyOtp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgotpass />} />
      </Routes>
    </Router>
  );
}

export default App;
