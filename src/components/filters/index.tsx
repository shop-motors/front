import { DivMain, LikmPrice, UlFilters } from "./style";

export const Filters = () => {
  return (
    <DivMain>
      <UlFilters>
        <li>
          <h3>Marca</h3>
          <span>Genaral motorsport</span>
          <span>Fiat</span>
          <span>Ford</span>
          <span>Honda</span>
          <span>Porshe</span>
          <span>Volswagen</span>
        </li>

        <li>
          <h3>Modelo</h3>
          <span>Civic</span>
          <span>Corolla</span>
          <span>Cruze</span>
          <span>Fit</span>
          <span>Gol</span>
          <span>Ka</span>
          <span>Onix</span>
          <span>Porshe 718</span>
        </li>
        <li>
          <h3>Cor</h3>
          <span>Azul</span>
          <span>Branca</span>
          <span>Cinza</span>
          <span>Prata</span>
          <span>Preta</span>
          <span>Verde</span>
        </li>
        <li>
          <h3>Ano</h3>
          <span>2023</span>
          <span>2022</span>
          <span>2021</span>
          <span>2018</span>
          <span>2015</span>
          <span>2011</span>
          <span>2010</span>
        </li>
        <li>
          <h3>Combustível</h3>
          <span>Diesel</span>
          <span>Etanol</span>
          <span>Gasolina</span>
          <span>Flex</span>
        </li>
        <LikmPrice>
          <h3>Km</h3>
          <div>
            <input type="number" placeholder="Mínimo" />
            <input type="number" placeholder="Máximo" />
          </div>
        </LikmPrice>
        <LikmPrice>
          <h3>Preço</h3>
          <div>
            <input type="number" placeholder="Mínimo" />
            <input type="number" placeholder="Máximo" />
          </div>
        </LikmPrice>
      </UlFilters>
    </DivMain>
  );
};
