import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { LoginPage } from "../pages/login";
import { ProductsDetail } from "../pages/product";
import { AdvertiserPage } from "../pages/profileViewAdmin";
import { Register } from "../pages/register";
import {
  RecoverPageEmail,
  RecoverPagePassword,
} from "../pages/recoverPassword";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductsDetail />} />
      <Route path="/advertiser" element={<AdvertiserPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recover/password" element={<RecoverPageEmail />} />
      <Route path="/recover/email" element={<RecoverPagePassword />} />
      {/* <Route path="/login" element="" />
      <Route path="/profileViewAdmin" element="" /> */}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
