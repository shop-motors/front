import { useEffect, useState } from "react";
import ImgCar from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1 (1).png";
import { Button } from "../Buttons";
import Modal from "../Modals";
import { Filters } from "../filters";
import { useContext } from "react";
import {
  ContainerDiv,
  DivBtnFilter,
  DivLi,
  DivMain,
  DivPagination,
  DivPrice,
  DivUsuario,
  LiCard,
  UlCard,
  UlCardAdmin,
} from "./style";
import { CarsContext } from "../../contexts/carsContext";
import { VehiclesContext } from "../../contexts/vehiclesContext";

export const Card = () => {
  const { cars } = useContext(CarsContext);

  return (
    <DivMain>
      <ContainerDiv>
        <UlCard>
          {cars.map((car) => (
            <LiCard key={car.id}>
              <img src={car.cover_img} alt="imagem de carro" />
              <DivLi>
                <h3>{car.brand}</h3>
                <p>{car.description}</p>
                <DivUsuario>
                  <span>R</span>
                  <p>{car.user.name}</p>
                </DivUsuario>
                <DivPrice>
                  <div>
                    <p>{`${car.km} km`}</p>
                    <p>{car.year}</p>
                  </div>
                  <span>{`$${car.price}`}</span>
                </DivPrice>
              </DivLi>
            </LiCard>
          ))}
        </UlCard>
        <div className="displayNone">
          <Filters />
        </div>

        <DivBtnFilter>
          <Modal
            device="mobile"
            type="button"
            size="default"
            color="brand1"
            content="Filtros"
          >
            <Filters />
          </Modal>
        </DivBtnFilter>
      </ContainerDiv>

      <DivPagination>
        <span>1 de 2</span>
        <button>Seguinte </button>
      </DivPagination>
    </DivMain>
  );
};

//-------------------------------------------------------

export const CardAdmin = () => {
  const [vehiclesList, setVehiclesList] = useState(Array());
  const { dataFormVehicles, setDataFormVehicles } = useContext(VehiclesContext);

  console.log({ dataFormVehicles });

  return (
    <UlCardAdmin>
      {dataFormVehicles &&
        dataFormVehicles?.map((item: any, index: number) => (
          <div key={item.name}>
            <LiCard>
              <img src={item.cover_img} alt="imagem de carro" />
              <DivLi>
                <h3>{item.brand}</h3>
                <p>{item.description}</p>
                <DivUsuario>
                  <span>R</span>
                  <p>Usuario</p>
                </DivUsuario>
                <DivPrice>
                  <div>
                    <p>{item.km} km</p>
                    <p>{item.year}</p>
                  </div>
                  <span>{item.price}</span>
                </DivPrice>
              </DivLi>
            </LiCard>
          </div>
        ))}
    </UlCardAdmin>
  );
};
