import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SearchedItem from "./SearchedItem";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipes from "./Recipes";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searchItem/:search" element={<SearchedItem />} />
        <Route path="/recipe/:name" element={<Recipes />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
