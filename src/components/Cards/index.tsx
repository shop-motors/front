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

//-------------------------------------------------------

export const CardAdmin = () => {
  return (
    <UlCardAdmin>
      <LiCard>
        <img src={ImgCar} alt="imagem de carro" />
        <DivLi>
          <h3>Porshe - Taycan</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            repellendus non labor...
          </p>
          <DivUsuario>
            <span>R</span>
            <p>Usuario</p>
          </DivUsuario>
          <DivPrice>
            <div>
              <p>0 km</p>
              <p>2019</p>
            </div>
            <span>R$ 500.000.000</span>
          </DivPrice>
        </DivLi>
      </LiCard>
      <LiCard>
        <img src={ImgCar} alt="imagem de carro" />
        <DivLi>
          <h3>Porshe - Taycan</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            repellendus non labor...
          </p>
          <DivUsuario>
            <span>R</span>
            <p>Usuario</p>
          </DivUsuario>
          <DivPrice>
            <div>
              <p>0 km</p>
              <p>2019</p>
            </div>
            <span>R$ 500.000.000</span>
          </DivPrice>
        </DivLi>
      </LiCard>
      <LiCard>
        <img src={ImgCar} alt="imagem de carro" />
        <DivLi>
          <h3>Porshe - Taycan</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            repellendus non labor...
          </p>
          <DivUsuario>
            <span>R</span>
            <p>Usuario</p>
          </DivUsuario>
          <DivPrice>
            <div>
              <p>0 km</p>
              <p>2019</p>
            </div>
            <span>R$ 500.000.000</span>
          </DivPrice>
        </DivLi>
      </LiCard>
      <LiCard>
        <img src={ImgCar} alt="imagem de carro" />
        <DivLi>
          <h3>Porshe - Taycan</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            repellendus non labor...
          </p>
          <DivUsuario>
            <span>R</span>
            <p>Usuario</p>
          </DivUsuario>
          <DivPrice>
            <div>
              <p>0 km</p>
              <p>2019</p>
            </div>
            <span>R$ 500.000.000</span>
          </DivPrice>
        </DivLi>
      </LiCard>
      <LiCard>
        <img src={ImgCar} alt="imagem de carro" />
        <DivLi>
          <h3>Porshe - Taycan</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            repellendus non labor...
          </p>
          <DivUsuario>
            <span>R</span>
            <p>Usuario</p>
          </DivUsuario>
          <DivPrice>
            <div>
              <p>0 km</p>
              <p>2019</p>
            </div>
            <span>R$ 500.000.000</span>
          </DivPrice>
        </DivLi>
      </LiCard>
      <LiCard>
        <img src={ImgCar} alt="imagem de carro" />
        <DivLi>
          <h3>Porshe - Taycan</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            repellendus non labor...
          </p>
          <DivUsuario>
            <span>R</span>
            <p>Usuario</p>
          </DivUsuario>
          <DivPrice>
            <div>
              <p>0 km</p>
              <p>2019</p>
            </div>
            <span>R$ 500.000.000</span>
          </DivPrice>
        </DivLi>
      </LiCard>
      <LiCard>
        <img src={ImgCar} alt="imagem de carro" />
        <DivLi>
          <h3>Porshe - Taycan</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            repellendus non labor...
          </p>
          <DivUsuario>
            <span>R</span>
            <p>Usuario</p>
          </DivUsuario>
          <DivPrice>
            <div>
              <p>0 km</p>
              <p>2019</p>
            </div>
            <span>R$ 500.000.000</span>
          </DivPrice>
        </DivLi>
      </LiCard>
      <LiCard>
        <img src={ImgCar} alt="imagem de carro" />
        <DivLi>
          <h3>Porshe - Taycan</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            repellendus non labor...
          </p>
          <DivUsuario>
            <span>R</span>
            <p>Usuario</p>
          </DivUsuario>
          <DivPrice>
            <div>
              <p>0 km</p>
              <p>2019</p>
            </div>
            <span>R$ 500.000.000</span>
          </DivPrice>
        </DivLi>
      </LiCard>
      <LiCard>
        <img src={ImgCar} alt="imagem de carro" />
        <DivLi>
          <h3>Porshe - Taycan</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            repellendus non labor...
          </p>
          <DivUsuario>
            <span>R</span>
            <p>Usuario</p>
          </DivUsuario>
          <DivPrice>
            <div>
              <p>0 km</p>
              <p>2019</p>
            </div>
            <span>R$ 500.000.000</span>
          </DivPrice>
        </DivLi>
      </LiCard>
      <LiCard>
        <img src={ImgCar} alt="imagem de carro" />
        <DivLi>
          <h3>Porshe - Taycan</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            repellendus non labor...
          </p>
          <DivUsuario>
            <span>R</span>
            <p>Usuario</p>
          </DivUsuario>
          <DivPrice>
            <div>
              <p>0 km</p>
              <p>2019</p>
            </div>
            <span>R$ 500.000.000</span>
          </DivPrice>
        </DivLi>
      </LiCard>
      <LiCard>
        <img src={ImgCar} alt="imagem de carro" />
        <DivLi>
          <h3>Porshe - Taycan</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            repellendus non labor...
          </p>
          <DivUsuario>
            <span>R</span>
            <p>Usuario</p>
          </DivUsuario>
          <DivPrice>
            <div>
              <p>0 km</p>
              <p>2019</p>
            </div>
            <span>R$ 500.000.000</span>
          </DivPrice>
        </DivLi>
      </LiCard>
    </UlCardAdmin>
  );
};
