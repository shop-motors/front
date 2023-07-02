import { useContext } from "react";
import { CarsContext } from "../../../contexts/carsContext";

export const ButtonPrevious = () => {  
  const { previousCount, anterior } = useContext(CarsContext);
  if(!anterior){
    return null
  }
  
  return <button onClick={() => previousCount()}>Anterior </button>;
};
