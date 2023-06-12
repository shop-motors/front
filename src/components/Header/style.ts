import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100%;
`;

export const DivInfo = styled.div`
  width: 100%;
  max-width: 1350px;
  position: absolute;
  top: 15%;
  z-index: 10;
  display: flex;
  gap: 26px;
  text-align: center;
  align-items: center;
  flex-direction: column;

  h2 {
    width: 77%;
    max-width: 500px;
    font-weight: 700;
    font-size: 25px;
    line-height: 40px;
    color: var(--color-gray-10);
  }

  p {
    width: 75%;
    max-width: 650px;
    font-weight: 500;
    line-height: 27px;
    font-size: 18px;
    color: var(--color-gray-10);
  }

  @media (min-width: 1100px) {
    position: absolute;
    top: 25%;
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 25px;
      font-weight: 600;
      line-height: 0px;
    }
  }
`;

export const ImgHeader1 = styled.img`
  width: 100%;
  height: 450px;
  @media (min-width: 728px) {
    display: none;
  }
`;
export const ImgHeader2 = styled.img`
  display: none;
  width: 100%;
  height: 370px;
  @media (min-width: 728px) {
    display: flex;
  }
`;
