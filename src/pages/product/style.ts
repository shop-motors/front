import styled from "styled-components";

export const StyledProducts = styled.main`
  color: var(--color-gray-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-color: var(--color-gray-5);
  padding: 0 .75rem;

  .content {
    background-color: red;
    min-height: 2000px;
  }

  .backgroundBlue {
    width: 100%;
    height: 580px;
    background-color: var(--color-brand-1);
    display: flex;
    justify-content: center;

    margin-top: 40px;
  }

  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: 2035px;
    gap: 15px;
    flex-wrap: wrap;
  }

  .carDiv {
    background-color: var(--color-gray-10);
    margin-top: 20px;
    border-radius: 4px;
    width: 58%;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: fill;

    img {
      width: 400px;
    }
  }
  .infoCar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    width: 58%;
    padding: 20px 33px 20px 33px;
    background-color: var(--color-gray-10);
    border-radius: 4px;
    margin-bottom: 15px;

    h3 {
      margin-bottom: 20px;
    }

    .pInfos {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 23px;

      .buttonInfos {
        display: flex;
        gap: 15px;
        align-items: center;
        width: auto;

        p {
          padding: 8px 12px 8px 12px;
          color: var(--color-brand-1);
          background-color: var(--color-brand-4);
          border-radius: 4px;
          font-weight: 600;
        }
      }
      .price {
        font-weight: 600;
      }
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 170px;
    width: 58%;
    padding: 33px;
    background-color: var(--color-gray-10);
    border-radius: 4px;
  }

  .photos {
    background-color: aqua;
    height: 370px;
    width: 36%;
    margin-top: 20px;
    background-color: var(--color-gray-10);
    border-radius: 4px;
    padding: 30px;

    h3 {
      margin-bottom: 20px;
    }

    .photosCar {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;

      div {
        background-color: var(--color-gray-7);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        border-radius: 4px;
        padding: 0px 10px 0px 10px;
        margin-bottom: 17px;
      }
      img {
        width: 88px;
      }
    }
  }
  .profileDiv {
    height: 400px;
    width: 36%;
    margin-top: 20px;
    border-radius: 4px;
    padding: 30px;
    background-color: var(--color-gray-10);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 30px;

    .imgProfile {
      font-weight: 600;
    }

    img {
      width: 80px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
  }
  //-------------------------------------------------------
  .coments {
    background-color: var(--color-gray-10);
    overflow: scroll;
    width: 58%; /* 
    height: 670px; */
    padding: 30px;
    color: var(--color-gray-2);
    border-radius: 4px;
    background-color: yellow;

    .comentProfile {
      display: flex;
      align-items: center;
      margin-top: 30px;
      gap: 15px;
      margin-bottom: 20px;
      font-weight: 600;

      img {
        width: 50px;
        border-radius: 50%;
      }
    }
    .dateComent {
      color: var(--color-gray-4);
    }

    .pDescription {
      margin-bottom: 40px;
    }
  }
  .typeComent {
    background-color: var(--color-gray-10);
    width: 58%;
    height: 270px;
    padding: 30px;
    color: var(--color-gray-2);
    border-radius: 4px;

    .comentProfile {
      display: flex;
      align-items: center;
      margin-top: 30px;
      gap: 15px;
      margin-bottom: 20px;
      font-weight: 600;

      img {
        width: 50px;
        border-radius: 50%;
      }
    }
    .commentBox {
      border-color: var(--color-gray-1);
      border: 2px;
      height: 100px;
    }
  }
`;
