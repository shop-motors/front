import { Form } from "..";
import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Buttons";
import { vehiclesSchema } from "../FormCreateVehicles/createVehicles.schema";
import { useContext, useEffect, useState } from "react";
import { StyledVehiclesForm } from "./style";
import { ModalButtonContext } from "../../../pages/contexts/modalContext";
import { error } from "console";

interface iFormVehicles {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: string;
  color: string;
  fipe_price: string;
  price: string;
  description: string;
  cover_img: string;
  img_url: string;
}

export const FormVehicles = () => {
  const [isSeller, setIsSeller] = useState(false);
  const { modal, setModal } = useContext(ModalButtonContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    setFocus,
  } = useForm<iFormVehicles>({ resolver: yupResolver(vehiclesSchema) });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const submitData = (data: iFormVehicles) => {
    console.log(data);
  };

  return (
    <StyledVehiclesForm
      title="Criar Anúncio"
      onSubmit={handleSubmit(submitData)}
    >
      <div className="formHeader">
        <h2>Criar Anúncio</h2>
        <button
          type="button"
          className="buttonCloseModal"
          onClick={() => setModal(false)}
        >
          x
        </button>
      </div>

      <h3 className="font-body-2-50">Informações do Veículo</h3>
      <Input
        label="Marca"
        register={register("brand")}
        placeholder="Selecione a Marca"
        error={errors.brand && errors.brand.message}
      />
      <Input
        label="Modelo"
        register={register("model")}
        placeholder="Selecione o modelo"
        error={errors.model && errors.model.message}
      />
      <div className="formDiv">
        <Input
          label="Ano"
          register={register("year")}
          placeholder="Ex: 2001"
          error={errors.year && errors.year.message}
        />
        <Input
          label="Combustível"
          register={register("fuel")}
          placeholder="Selecione o combustível"
          error={errors.fuel && errors.fuel.message}
        />
      </div>

      <div className="formDiv">
        <Input
          label="Quilometragem"
          register={register("km")}
          placeholder="Ex: 30.000"
          error={errors.km && errors.km.message}
        />
        <Input
          label="Cor"
          register={register("color")}
          placeholder="Ex: Preto"
          error={errors.color && errors.color.message}
        />
      </div>
      <div className="formDiv">
        <Input
          label="Preço Tabela FIPE"
          register={register("fipe_price")}
          placeholder="Ex: 48.000,00"
          error={errors.fipe_price && errors.fipe_price.message}
        />
        <Input
          label="Preço"
          register={register("price")}
          placeholder="Ex: 50.000,00"
          error={errors.price && errors.price.message}
        />
      </div>
      <Input
        label="Descrição"
        register={register("description")}
        placeholder="Ex: 50.000,00"
        error={errors.description && errors.description.message}
      />

      <Input
        label="Imagem da capa"
        register={register("cover_img")}
        placeholder="Ex: https://image.com"
        error={errors.cover_img && errors.cover_img.message}
      />
      <Input
        label="1° Imagem da galeria"
        register={register("img_url")}
        placeholder="https://image.com"
        error={errors.img_url && errors.img_url.message}
      />
      <Input
        label="2° Imagem da galeria"
        register={register("img_url")}
        placeholder="Ex: https://image.com"
        error={errors.img_url && errors.img_url.message}
      />

      <div className="divButtons">
        <div className="buttons">
          <button
            color="gray8"
            content="Cancelar"
            type="button"
            className="buttonCloseModal"
            onClick={() => setModal(false)}
          >
            Cancelar
          </button>
          {/* 
          <button color="brand3" content="Criar anúncio" type="submit">
            Enviar
          </button> */}
          <Button
            type="submit"
            color="brand3"
            size="default"
            content="Criar anúncio"
            disabled={Object.keys(errors).length > 0}
          />
        </div>
      </div>
    </StyledVehiclesForm>
  );
};
