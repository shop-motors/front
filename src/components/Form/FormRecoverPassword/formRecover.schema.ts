import * as yup from "yup";

export const RecoverSchemaEmail = yup.object().shape({
  email: yup.string().required("Email obrigatório"),
});

export const RecoverSchemaPassword = yup.object().shape({
  password: yup.string().required("senha obrigatório"),
});
