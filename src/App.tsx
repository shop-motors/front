import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { ToastConfig } from "./components/ToastConfig";
import { StyledGlobals } from "./styles/globals";
import { ModalButtonProvider } from "./pages/contexts/modalContext/index";
import { UserProviders } from "./contexts/userContexts";

export const App = () => {
  return (
    <ModalButtonProvider>
      <BrowserRouter>
        <ToastConfig />
        <UserProviders>
          <PageRoutes />
        </UserProviders>
      </BrowserRouter>
    </ModalButtonProvider>
  );
};
