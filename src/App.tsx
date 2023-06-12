import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { ToastConfig } from "./components/ToastConfig";
import { StyledGlobals } from "./styles/globals";

export const App = () => {
  return (
    <BrowserRouter>
      <StyledGlobals />
      <ToastConfig />
      <PageRoutes />
    </BrowserRouter>
  );
};
