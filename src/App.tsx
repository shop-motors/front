import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { ToastConfig } from "./components/ToastConfig";
import { Input } from "./components/Input";
import { useForm } from "react-hook-form";

export const App = () => {
  const { register } = useForm();

  return (
    <BrowserRouter>
      <ToastConfig />
      <Input
        label="Teste label"
        placeholder="Placeholder"
        register={register("teste")}
        error="Mensagem de erro"
      />
      <PageRoutes />
    </BrowserRouter>
  );
};
