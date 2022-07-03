import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from "./components/shop/shop";
import Home from "./components/homepage/home";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}  />
          <Route exact path="/shop" element={<Shop />}  />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
