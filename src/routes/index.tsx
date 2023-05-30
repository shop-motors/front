import { Navigate, Route, Routes } from "react-router-dom";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element="" />
      <Route path="/login" element="" />
      <Route path="/register" element="" />
      <Route path="/profileViewAdmin" element="" />
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
