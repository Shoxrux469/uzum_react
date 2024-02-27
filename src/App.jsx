import Home from "./pages/home";
import Profile from "./pages/profile/Profile";
import React from "react";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
