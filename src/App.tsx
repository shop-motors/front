import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { ToastConfig } from "./components/ToastConfig";
import { ModalButtonProvider } from "./pages/contexts/modalContext/index";
import { UserProviders } from "./contexts/userContexts";
import { ModalGenericProvider } from "./components/Modals/ModalGeneric/context";

export const App = () => {
  return (
    <ModalButtonProvider>
      <ModalGenericProvider>
        <BrowserRouter>
          <ToastConfig />
          <UserProviders>
            <PageRoutes />
          </UserProviders>
        </BrowserRouter>
      </ModalGenericProvider>
    </ModalButtonProvider>
  );
};
