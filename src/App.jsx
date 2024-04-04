// App.js
import Layout from "./layout/Layout";
import Home from "./pages/home/home";
import Profile from "./pages/profile/Profile";
import Product from "./pages/productPage/product";
import Favourites from "./pages/favourites/favourites";
import { Route, Routes } from "react-router-dom";
import BagPage from "./pages/bagPage/bagPage";
import SearchPage from "./pages/searchPage/searchPage";
import OrderPage from "./pages/orderPage/orderPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/profile" element={<Layout><Profile /></Layout>} />
      <Route path="/product" element={<Layout><Product /></Layout>} />
      <Route path="/favourites" element={<Layout><Favourites /></Layout>} />
      <Route path="/bagPage" element={<Layout><BagPage /></Layout>} />
      <Route path="/searcher" element={<Layout><SearchPage /></Layout>} />
      <Route path="/orderPage" element={<Layout includeHeader={false}><OrderPage /></Layout>} />
    </Routes>
  );
}

export default App;
