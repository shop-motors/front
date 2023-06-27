import {
  FormRecoverPassword,
  FormRecoverPasswordEmail,
} from "../../components/Form/FormRecoverPassword";
import { StyleRecoverPage } from "./style";

export const RecoverPageEmail = () => {
  return (
    <StyleRecoverPage>
      <FormRecoverPasswordEmail />
    </StyleRecoverPage>
  );
};

export const RecoverPagePassword = () => {
  return (
    <StyleRecoverPage>
      <FormRecoverPassword />
    </StyleRecoverPage>
  );
};
