import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from "./Components/Login";
import Main from "./Components/Main";
import Food from "./Components/Food";
import Register from "./Components/Register";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import AddCart from "./Components/AddCart";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Main" element={<Main/>} />
          <Route path="/Food" element={<Food/>} />
          <Route path="/Card" element={<Card/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/AddCart" element={<AddCart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
