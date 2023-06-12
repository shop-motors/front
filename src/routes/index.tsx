import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element="" />
      <Route path="/register" element="" />
      <Route path="/profileViewAdmin" element="" /> */}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
