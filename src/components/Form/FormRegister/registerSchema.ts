import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string(),
  email: yup.string().email(),
  cpf: yup.string(),
  phone: yup.string(),
  birth_date: yup.string(),
  description: yup.string(),
  zip_code: yup.string(),
  state: yup.string(),
  city: yup.string(),
  street: yup.string(),
  number: yup.string(),
  complement: yup.string(),
  password: yup.string(),
  confirmPassword: yup.string(),
});
