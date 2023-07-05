import * as yup from "yup";

export const vehiclesSchema = yup.object().shape({
  brand: yup.string().required("* campo obrigatório"),
  model: yup.string().required("* campo obrigatório"),
  year: yup.string().required("* campo obrigatório"),
  fuel: yup.string().required("* campo obrigatório"),
  km: yup.string().required("* campo obrigatório"),
  color: yup.string().required("* campo obrigatório"),
  fipe_price: yup.number().required("* campo obrigatório"),
  price: yup.number().required("* campo obrigatório"),
  description: yup.string().required("* campo obrigatório"),
  cover_img: yup.string().required("* campo obrigatório"),
  galleryImages: yup.array().of(yup.string()).required(),
});
