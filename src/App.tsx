import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { ToastConfig } from "./components/ToastConfig";
import { ModalButtonProvider } from "./pages/contexts/modalContext/index";
import { UserProviders } from "./contexts/userContexts";
import { CarProviders } from "./contexts/carsContext";



export const App = () => {
  return (
    <ModalButtonProvider>
      <BrowserRouter>
        <ToastConfig />
        <UserProviders>
          <CarProviders>
            <PageRoutes />
          </CarProviders>
        </UserProviders>
      </BrowserRouter>
    </ModalButtonProvider>
  );
};
