import { NavBar, NavBarProfile } from "../../components/Nav";
import { StyledProducts } from "./style";
import ImgProfile from "../../images/leia.jpeg";
import { CardAdmin } from "../../components/Cards";
import { Footer } from "../../components/Footer";
import Modal from "../../components/Modals";

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

          <Modal
            size="default"
            color="border_blue"
            content="Criar Anúncio"
            type="button"
          >
            <h1>teste</h1>
          </Modal>
        </div>
      </div>
      <div className="cards">
        <CardAdmin />
      </div>
      <Footer />
    </StyledProducts>
  );
};
