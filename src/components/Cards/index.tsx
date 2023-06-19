import { useEffect, useState } from "react";
import ImgCar from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1 (1).png";
import { Button } from "../Buttons";
import { Filters } from "../filters";
import Modal from "../Modals";
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
import { apiKenzieCars } from "../../services/api";
import { IVehicles } from "../../interfaces/vehiclesInterface";

export const Card = () => {
  return (
    <DivMain>
      <ContainerDiv>
        <UlCard>
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
        </UlCard>
      </ContainerDiv>

      <DivBtnFilter>
        <Modal type="button" size="default" color="brand1" content="Filtros">
          <Filters />
        </Modal>
      </DivBtnFilter>
      <DivPagination>
        <span>1 de 2</span>
        <button>Seguinte</button>
      </DivPagination>
    </DivMain>
  );
};

//-------------------------------------------------------

export const CardAdmin = () => {
  const [vehiclesList, setVehiclesList] = useState([]);

  console.log(vehiclesList);

  useEffect(() => {
    const vehiclesLoad = async () => {
      try {
        const { data } = await apiKenzieCars.get("/");
        console.log(data);
        setVehiclesList(data.chevrolet);
      } catch (error) {
        console.log(error);
      }
    };
    vehiclesLoad();
  }, []);

  return (
    <UlCardAdmin>
      {vehiclesList.map((item: any) => (
        <>
          <LiCard>
            <img src={ImgCar} alt="imagem de carro" />
            <DivLi>
              <h3>{item.name}</h3>
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
        </>
      ))}
    </UlCardAdmin>
  );
};
