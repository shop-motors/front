import { NavBarProfile } from "../../components/Nav";
import { StyledProducts } from "./style";
import imgCar from "../../images/car.png";
import { Button } from "../../components/Buttons";
import ImgProfile from "../../images/leia.jpeg";
import { Footer } from "../../components/Footer";
import { FormCreateCommentary } from "../../components/Form/FormCreateCommentary";
import { useContext, useState } from "react";
import { VehiclesContext } from "../../contexts/vehiclesContext";
import { UserContexts } from "../../contexts/userContexts";
import { ModalEditCommentary } from "../../components/Modals/MotalEditCommentary";

export const ProductsDetail = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idCommentary, setIdCommentary] = useState("");
  const { showCard } = useContext(VehiclesContext);
  const { user } = useContext(UserContexts);

  return (
    <StyledProducts>
      <NavBarProfile />
      <div className="content">
        <div className="backgroundBlue">
          <div className="products">
            <div className="carDiv">
              <img src={imgCar} alt="" />
            </div>
            <div className="infoCar">
              <h3>
                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
              </h3>
              <div className="pInfos">
                <div className="buttonInfos">
                  <p>2013</p>
                  <p>0 KM</p>
                </div>
                <div className="price">
                  <p>R$ 00.000,00</p>
                </div>
              </div>
              <div className="buttonBuy">
                <Button
                  /* onClick={() => userSell()} */
                  type="button"
                  size="default"
                  color="brand1"
                  content={"Comprar"}
                />
              </div>
            </div>
            <div className="description">
              <h3>Descrição</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                nostrum dignissimos minus. Esse, rerum autem. Voluptate ratione
                tempora nisi aut eligendi corrupti quo, maiores ipsa, incidunt
                tenetur velit, impedit aperiam.
              </p>
            </div>
            {/* ------------------------------------------------------- */}
            <div className="coments">
              <h3>Comentários</h3>
              <div className="comentProfile">
                <img src={ImgProfile} alt="" />
                <p>Fulana de Souza</p>
                <div className="dateComent">
                  <small>° há 3 dias</small>
                </div>
              </div>
              <p className="pDescription">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                expedita fugiat aliquam aspernatur et obcaecati cumque,
                perferendis quam! Dolor possimus accusamus .
              </p>
            </div>
            {/* ------------------------------------ */}
            <div className="typeComent">
              <div className="comentProfile">
                <img src={ImgProfile} alt="" />
                <p>Fulana de Souza</p>
                <div className="dateComent">
                  <small>° há 3 dias</small>
                </div>
              </div>
              <div className="commentBox">
                <small>
                  Carro muito confortável, foi uma ótima experiência de
                  compra...
                </small>
              </div>
            </div>
            {/* ------------------------------------------------------- */}
            <div className="photos">
              <h3>Fotos</h3>
              <div className="photosCar">
                <div>
                  <img src={imgCar} alt="" />
                </div>
                <div>
                  <img src={imgCar} alt="" />
                </div>
                <div>
                  <img src={imgCar} alt="" />
                </div>
                <div>
                  <img src={imgCar} alt="" />
                </div>
                <div>
                  <img src={imgCar} alt="" />
                </div>
                <div>
                  <img src={imgCar} alt="" />
                </div>
              </div>
            </div>
            <div className="profileDiv">
              <div className="imgProfile">
                <img src={ImgProfile} alt="" />
                <p>Leia Organa</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                nostrum dignissimos minus. Esse, rerum autem. Voluptate ratione
                tempora nisi aut eligendi corrupti quo, maiores ipsa, incidunt
                tenetur velit, impedit aperiam.
              </p>
              <Button
                /* onClick={() => userSell()} */
                type="button"
                size="default"
                color="gray0"
                content={"Comprar"}
              />
            </div>
          </div>
        </div>
      </div>
      <FormCreateCommentary />
      {isOpenModal && (
        <ModalEditCommentary
          closeModal={() => setIsOpenModal(false)}
          description="Editar Comentario"
          id={idCommentary}
        />
      )}
      <Footer />
    </StyledProducts>
  );
};
