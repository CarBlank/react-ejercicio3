import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reserve from "./pages/Reserve";
import About from "./pages/About";
import TheHeader from "./components/header/TheHeader";

const dishes = [
  {
    id: 1,
    name: "Dish 1",
    description: "This is 1",
    price: 20,
  },
  {
    id: 2,
    name: "Dish 2",
    description: "This is 2",
    price: 40,
  },
  {
    id: 3,
    name: "Dish 3",
    description: "This is 3",
    price: 30,
  },
];
const App = () => {
  return (
    <BrowserRouter>
      <TheHeader />
      <Routes>
        <Route path="/" element={<Home dishes={dishes} />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
