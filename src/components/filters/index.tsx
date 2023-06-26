import { filter } from "@chakra-ui/react";
import { DivMain, LikmPrice, UlFilters } from "./style";
import { useContext } from "react";
import { CarsContext } from "../../contexts/carsContext";

export const Filters = () => {
  const { setFilter, marcas } = useContext(CarsContext);
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(e.currentTarget); // This will log the content of the clicked element
  };

  return (
    <DivMain>
      <UlFilters>
        {marcas.map((marca) => (
          <li key={marca.value} onClick={() => setFilter(marca.value)}>
            {marca.label}
          </li>
        ))}
      </UlFilters>
    </DivMain>
  );
};
