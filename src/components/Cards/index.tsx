import ImgCar from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1 (1).png";
import Modal from "../Modals";
import { Filters } from "../filters";
import { useContext, useState } from "react";
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
import { ButtonPrevious } from "../Buttons/buttonPrevious";
import { VehiclesContext, iFormVehicles } from '../../contexts/vehiclesContext';
import { Navigate, useNavigate } from 'react-router-dom';

export const Card = () => {
  const { cars, paginationCount, page, pageAtual } = useContext(CarsContext);
  const formatPrice = (price: any) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <DivMain>
      <ContainerDiv>
        <UlCard>
          {cars.map((car) => (
            <LiCard key={car.id}>
              <img src={car.cover_img} alt="imagem de carro" />
              <DivLi>
                <h3>{car.model}</h3>
                <p>{car.description}</p>
                <DivUsuario>
                  <span>R</span>
                  <p>{car.user.name}</p>
                </DivUsuario>
                <DivPrice>
                  <div>
                    <p>{`${car.km}km`}</p>
                    <p>{car.year}</p>
                  </div>
                  <span>{formatPrice(parseFloat(`${car.price}`))}</span>
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
        <span>
          {page} de {page}
        </span>
        <ButtonPrevious />
        <button onClick={() => paginationCount()}>Seguinte </button>
      </DivPagination>
    </DivMain>
  );
};


export const CardAdmin = () => {
  const { dataFormVehicles, setShowCard } = useContext(VehiclesContext);
  const navigate = useNavigate()
  console.log({ dataFormVehicles });
  const handleClick = (item: iFormVehicles) =>{
    setShowCard(item)
    navigate('/products')
  }
  return (
    <UlCardAdmin>
      {dataFormVehicles &&
        dataFormVehicles?.map((item: any, index: number) => (
          <div key={item.index}>
            {/* colocar um onclick na Li */}
            <LiCard onClick={() => handleClick(item)}>
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



