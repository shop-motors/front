import { Button } from "..";
import { useContext } from "react";
import { CarsContext } from "../../../contexts/carsContext";
import { BtnContainer } from "./style";
export const BtnCloseFilter = () => {
  const { close, closeFilter } = useContext(CarsContext);

  if (!close) {
    return null;
  }
  return (
    <BtnContainer>
      <Button
        size="large"
        color="brand2"
        content={"Limpar Filtros"}
        type={undefined}
        onClick={() => closeFilter()}
      />
    </BtnContainer>
  );
};
