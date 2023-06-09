import "./App.css";
import Home from "./Containers/Home";
import Detail from "./Containers/Detail";
import WishList from "./Containers/Detail";
import Basket from "./Containers/Basket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Detail" element={<Detail />} />
        <Route exact path="/WishList" element={<WishList />} />
        <Route exact path="/Basket" element={<Basket />} />
      </Routes>
    </Router>
  );
}

export default App;
