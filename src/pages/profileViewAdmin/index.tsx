import { NavBarProfile } from "../../components/Nav";
import { StyledProducts } from "./style";
import imgCar from "../../images/car.png";
import { Button } from "../../components/Buttons";
import ImgProfile from "../../images/leia.jpeg";
import { CardAdmin } from "../../components/Cards";

export const AdvertiserPage = () => {
  return (
    <StyledProducts>
      <NavBarProfile />

      <div className="backgroundBlue">
        <div className="profile">
          <img src={ImgProfile} alt="" />
          <div className="profileInfo">
            <h3>Leia Organa</h3>
            <small>Anunciante</small>
          </div>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            reprehenderit enim aut amet quia ad, autem soluta a, nisi,
            architecto debitis. Ipsam consectetur quo dolore commodi dolorum
            voluptate! Magnam, voluptatum.
          </small>
          <Button
            /* onClick={() => userSell()} */
            size="default"
            color="border_blue"
            content={"Criar anúncio"}
          />
        </div>
      </div>
      <div className="cards">
        <CardAdmin />
      </div>
    </StyledProducts>
  );
};
