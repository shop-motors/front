import { Link } from "react-router-dom";
import { Button } from "..";
import { DivButtons } from "./style";
import { useContext } from "react";
import { CarsContext } from "../../../contexts/carsContext";

export const BtnsNav = () => {
  const { nav } = useContext(CarsContext);

  if (!nav) {
    return null;
  }
  return (
    <DivButtons>
      <Link to={"/login"}>
        fazer login
      </Link>
      <Link to={"/register"}>
        <Button
          size="default"
          color="gray6"
          content={"Cadastrar"}
          type={undefined}
        />
      </Link>
    </DivButtons>
  );
};
