import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { ToastConfig } from "./components/ToastConfig";

export const App = () => {
  return (
    <BrowserRouter>
      <ToastConfig />
      <PageRoutes />
    </BrowserRouter>
  );
};
