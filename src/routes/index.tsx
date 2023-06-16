import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { ProductsDetail } from "../pages/product";
import { AdvertiserPage } from "../pages/profileViewAdmin";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsDetail />} />
      <Route path="/advertiser" element={<AdvertiserPage />} />
      {/* <Route path="/login" element="" />
      <Route path="/register" element="" />
      <Route path="/profileViewAdmin" element="" /> */}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
