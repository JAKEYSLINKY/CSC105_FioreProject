import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import "../css/App.css";
import CustomOwn from "../pages/CustomOwn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="custom" element={<CustomOwn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
