import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Register } from "../pages/register";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/login" element="" />
      <Route path="/profileViewAdmin" element="" /> */}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
