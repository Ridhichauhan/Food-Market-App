import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Email from './Components/Email';
import Home from './Components/Home';
import Login from "./Components/Login";
import Main from "./Components/Main";
import Food from "./Components/Food";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/email" element={<Email />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Main" element={<Main/>} />
          <Route path="/Food" element={<Food/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
