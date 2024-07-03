import React from "react";
import Navbar from "./Navbar";
import FetchApi from "./FetchApi";
import FetchApi2 from "./FetchApi2";
import "./Main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const RouterMainCompo = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<FetchApi />} />
            <Route path="DogsData" element={<FetchApi2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterMainCompo;
