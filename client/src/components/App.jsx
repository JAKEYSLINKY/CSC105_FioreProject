import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import "../css/App.css";
import CustomOwn from "../pages/CustomOwn";
import Buynow from "../pages/Buynow";
import myCart from "../pages/myCart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="CustomOwn" element={<CustomOwn />} />
            <Route path="Buynow" element={<Buynow/>}/>
            <Route path="myCart" element={<myCart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
