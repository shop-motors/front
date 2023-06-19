import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { ProductsDetail } from "../pages/product";
import { AdvertiserPage } from "../pages/profileViewAdmin";
import { Register } from "../pages/register";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsDetail />} />
      <Route path="/advertiser" element={<AdvertiserPage />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/login" element="" />
      <Route path="/profileViewAdmin" element="" /> */}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
