import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { ToastConfig } from "./components/ToastConfig";
import { StyledGlobals } from "./styles/globals";
import { ModalButtonProvider } from "./pages/contexts/modalContext/index";

export const App = () => {
  return (
    <ModalButtonProvider>
      <BrowserRouter>
        <StyledGlobals />
        <ToastConfig />
        <PageRoutes />
      </BrowserRouter>
    </ModalButtonProvider>
  );
};
