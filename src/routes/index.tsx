import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { LoginPage } from "../pages/login";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element="" />
      <Route path="/profileViewAdmin" element="" />
    </Routes>
  );
};
