import { NavBarProfile } from "../../components/Nav";
import {
  DivCar,
  DivContainerGalery,
  DivDescrição,
  DivGalery,
  DivImg,
  DivKmYears,
  HeaderPage,
  StyledProducts,
  UlCars,
  UlProfile,
} from "./style";
import imgCar from "../../images/car.png";
import { Button } from "../../components/Buttons";
import ImgProfile from "../../images/leia.jpeg";
import { Footer } from "../../components/Footer";
import { FormCreateCommentary } from "../../components/Form/FormCreateCommentary";
import { useContext, useState, useEffect } from "react";
import { VehiclesContext } from "../../contexts/vehiclesContext";
import { UserContexts } from "../../contexts/userContexts";
import { ModalEditCommentary } from "../../components/Modals/MotalEditCommentary";
import { useNavigate } from "react-router-dom";

export const ProductsDetail = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idCommentary, setIdCommentary] = useState("");
  const { showCard, retriveVehicle } = useContext(VehiclesContext);
  const { user, verifyUserLoged } = useContext(UserContexts);
  const navigate = useNavigate();

  useEffect(() => {
    const idVehicle = localStorage.getItem("@IDVEHICLE");

    if (idVehicle) {
      setTimeout(() => {
        retriveVehicle(idVehicle);
      }, 3);
    } else {
      console.log("deu ruim");
      navigate("/advertiser");
    }
  }, []);

  return (
    <StyledProducts>
      <NavBarProfile />
      <HeaderPage>
        <DivCar>
          <DivImg>
            <img src={showCard?.cover_img} alt="imagem de carro" />
          </DivImg>
          <UlCars>
            <li>
              <h2>{showCard?.model}</h2>
              <DivKmYears>
                <div>
                  <p>2013</p>
                  <p> 0 KM</p>
                </div>
                <span>R$00.00,00</span>
              </DivKmYears>
              <button>Comprar</button>
            </li>
          </UlCars>
        </DivCar>
        <DivContainerGalery>
          <DivGalery>
            <h3>Fotos</h3>
            <div>
              <img src={imgCar} alt="carro" />
              <img src={imgCar} alt="carro" />
              <img src={imgCar} alt="carro" />
              <img src={imgCar} alt="carro" />
              <img src={imgCar} alt="carro" />
              <img src={imgCar} alt="carro" />
            </div>
          </DivGalery>
          <UlProfile>
            <li>
              <img src={ImgProfile} alt="imagem de perfil" />
              <h3>Samuel Leão</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing </p>
              <Button
                size="large"
                color="gray0"
                content={"Ver todos anuncios"}
                type={undefined}
              />
            </li>
          </UlProfile>
        </DivContainerGalery>
      </HeaderPage>
      <DivDescrição>
        <h2>Descrição</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim
          veniam voluptas excepturi,jdbjfsdjjjjjjjjjjjjjjjjjjjjr
          iddkmdsdkspaodksaopkdsoapd jsdkkkjnfclkdsfm
        </p>
      </DivDescrição>
      <ul>
        <h2>Comentarios</h2>
        {showCard &&
          showCard.comments &&
          showCard.comments.map((comment, index) => {
            return (
              <li key={index}>
                <div>
                  <img src={ImgProfile} alt="imagem usuario" />
                  <p>Julia lima</p>
                  <span>há 5 dias</span>
                </div>
                <p>{comment.content}</p>
              </li>
            );
          })}
      </ul>

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
