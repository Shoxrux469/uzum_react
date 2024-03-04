import Home from "./pages/home/home";
import Profile from "./pages/profile/Profile";
import Product from "./pages/productPage/product";
import Favourites from "./pages/favourites/favourites";
import React from "react";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import BagPage from "./pages/bagPage/bagPage";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/bagPage" element={<BagPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
