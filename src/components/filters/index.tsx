import { DivInputs, DivMain, LikmPrice, UlFilters } from "./style";
import { useContext } from "react";
import { CarsContext } from "../../contexts/carsContext";
import { BtnCloseFilter } from "../Buttons/btnsCloseFilter";

export const Filters = () => {
  const { cars, setCars, setClose } = useContext(CarsContext);

  return (
    <DivMain>
      <UlFilters onClick={() => setClose(true)}>
        <h3>Marcas</h3>
        {Array.from(new Set(cars.map((car) => car.brand))).map(
          (marca, index) => (
            <li
              key={index}
              onClick={() => setCars(cars.filter((car) => car.brand === marca))}
            >
              <span>{marca}</span>
            </li>
          )
        )}

        <h3>Modelo</h3>
        {Array.from(new Set(cars.map((car) => car.model))).map(
          (marca, index) => (
            <li
              key={index}
              onClick={() => setCars(cars.filter((car) => car.model === marca))}
            >
              <span>{marca}</span>
            </li>
          )
        )}

        <h3>Cor</h3>
        {Array.from(new Set(cars.map((car) => car.color))).map(
          (marca, index) => (
            <li
              key={index}
              onClick={() => setCars(cars.filter((car) => car.color === marca))}
            >
              <span>{marca}</span>
            </li>
          )
        )}

        <h3>Ano</h3>
        {Array.from(new Set(cars.map((car) => car.year))).map(
          (marca, index) => (
            <li
              key={index}
              onClick={() => setCars(cars.filter((car) => car.year === marca))}
            >
              <span>{marca}</span>
            </li>
          )
        )}

        <h3>Combustível</h3>
        {Array.from(new Set(cars.map((car) => car.fuel))).map(
          (marca, index) => (
            <li
              key={index}
              onClick={() => setCars(cars.filter((car) => car.fuel === marca))}
            >
              <span>{marca}</span>
            </li>
          )
        )}
        <h3>Km</h3>
        <DivInputs>
          <li onChange={() => setCars(cars.filter((car) => car.km))}>
            <input type="text" placeholder="Miníma" />
            <input type="text" placeholder="Máxíma" />
          </li>
        </DivInputs>
        <h3>Preço</h3>
        <DivInputs>
          <LikmPrice onChange={() => setCars(cars.filter((car) => car.price))}>
            <input type="text" placeholder="Miníma" />
            <input type="text" placeholder="Máxíma" />
          </LikmPrice>
        </DivInputs>
        <BtnCloseFilter />
      </UlFilters>
    </DivMain>
  );
};
