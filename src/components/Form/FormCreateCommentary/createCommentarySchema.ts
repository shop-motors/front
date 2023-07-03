import * as yup from "yup";

export const createCommentarySchema = yup.object({
  content: yup.string().required("Campo obrigatório"),
});
