import { Form } from "..";
import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Buttons";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver("") });

  return (
    <Form title="Cadastro" onSubmit={handleSubmit(() => console.log())}>
      <h3 className="font-body-2-50">Informações Pessoais</h3>
      <Input
        label="Nome"
        register={register("name")}
        placeholder="Ex: Samuel Leão"
        error={errors.name && errors.name.message}
      />
      <Input
        label="E-mail"
        register={register("email")}
        placeholder="Ex: samuel@kenzie.com.br"
        error={errors.email && errors.email.message}
      />
      <Input
        label="CPF"
        register={register("cpf")}
        placeholder="000.000.000-00"
        error={errors.cpf && errors.cpf.message}
      />
      <Input
        label="Celular"
        register={register("phone")}
        placeholder="(DDD) 90000-0000"
        error={errors.phone && errors.phone.message}
      />
      <Input
        label="Data de Nascimento"
        register={register("birth_data")}
        placeholder="00/00/00"
        error={errors.birth_data && errors.birth_data.message}
      />
      <Input
        label="Descrição"
        register={register("description")}
        placeholder="Digitar descrição"
        error={errors.description && errors.description.message}
      />
      <h3 className="font-body-2-50">Infomações de endereço</h3>
      <Input
        label="CEP"
        register={register("zip_code")}
        placeholder="00000.000"
        error={errors.zip_code && errors.zip_code.message}
      />
      <Input
        label="Estado"
        register={register("state")}
        placeholder="Digitar Estado"
        error={errors.state && errors.state.message}
      />
      <Input
        label="Cidade"
        register={register("city")}
        placeholder="Digitar cidade"
        error={errors.city && errors.city.message}
      />
      <Input
        label="Rua"
        register={register("street")}
        placeholder="Digitar rua"
        error={errors.street && errors.street.message}
      />
      <Input
        label="Numero"
        register={register("number")}
        placeholder="Digitar número"
        error={errors.number && errors.number.message}
      />
      <Input
        label="Complemento"
        register={register("complement")}
        placeholder="Ex: apart 307"
        error={errors.complement && errors.complement.message}
      />
      <h3 className="font-body-2-50">Tipo de conta</h3>
      //buttons
      <Input
        label="Senha"
        register={register("password")}
        placeholder="00/00/00"
        error={errors.password && errors.password.message}
      />
      <Input
        label="Confirmar Senha"
        register={register("confirmPassword")}
        placeholder="00/00/00"
        error={errors.confirmPassword && errors.confirmPassword.message}
      />

      <Button type="submit" color="brand1" size="default" content="Finalizar Cadastro" />
    </Form>
  );
};
