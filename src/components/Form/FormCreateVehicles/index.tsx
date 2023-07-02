import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Buttons";
import { vehiclesSchema } from "../FormCreateVehicles/createVehicles.schema";
import { useContext, useEffect, useState } from "react";
import { StyledVehiclesForm } from "./style";
import { ModalButtonContext } from "../../../pages/contexts/modalContext";
import { VehiclesContext } from "../../../contexts/vehiclesContext";
import { IBrand } from "../../../interfaces/vehiclesInterface";

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
  galleryImages: string;
}

export const FormVehicles = () => {
  const { modal, setModal } = useContext(ModalButtonContext);
  const [images, setImages] = useState([] as string[]);
  const { vehiclesList, createNew, setVehiclesList } =
    useContext(VehiclesContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImages([...images, event.target.value]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<iFormVehicles>({ resolver: yupResolver(vehiclesSchema) });

  const selectedBrand = watch("brand");

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const submitVehicles = (formData: iFormVehicles) => {
    console.log({ ...formData, galleryImages: images });
  };

  return (
    <StyledVehiclesForm
      title="Criar Anúncio"
      onSubmit={handleSubmit(submitVehicles)}
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

      <div className="select">
        <label className="font-input-label" htmlFor="brand">
          Brand
        </label>
        <select
          className="font-input-placeholder"
          id="brand"
          {...register("brand")}
          defaultValue=""
        >
          {Object.keys(vehiclesList as IBrand)?.map((brand) => (
            <option value={brand}>{brand}</option>
          ))}
        </select>

        <label className="font-input-label" htmlFor="brand">
          Modelo
        </label>
        <select
          className="font-input-placeholder"
          id="model"
          {...register("model")}
          defaultValue=""
        >
          {vehiclesList &&
            vehiclesList[selectedBrand]?.map((model) => (
              <option value={model.name}>{model.name}</option>
            ))}
        </select>
      </div>

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
        onBlur={handleChange}
        placeholder="https://image.com"
      />
      <Input
        label="2° Imagem da galeria"
        onBlur={handleChange}
        placeholder="Ex: https://image.com"
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