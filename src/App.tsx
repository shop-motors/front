import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { ToastConfig } from "./components/ToastConfig";
import { StyledGlobals } from "./styles/globals";
import { Button } from "./components/Buttons";
import Modal from "./components/Modals";


export const App = () => {
  function userSell(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <BrowserRouter>
      <StyledGlobals />
      <ToastConfig />
      <PageRoutes />
    </BrowserRouter>
  );
};
