import styled from "styled-components";

export const FormLog = styled.form`
  display: flex;
  width: 80%;
  height: 70%;
  max-width: 310px;
  flex-direction: column;
  border-radius: 4px;
  gap: 20px;
  margin: 0 auto;
  margin-top: 70px;
  background-color: var(--color-gray-10);
  padding: 30px;
  position: fixed;
  top: 10%;
  left: 0%;
  right: 0%;
  bottom: 0%;

  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
  }
  h4 {
    color: var(--color-alert1);
    font-size: 10px;
    height: 1px;
  }

  label {
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
  }
  input {
    padding: 7px;
    border-radius: 4px;
    border: 1px solid var(--color-gray-3);
  }
  span {
    font-weight: 500;
    font-size: 11px;
    line-height: 24px;
    margin-left: 70px;
    color: var(--color-gray-2);
    width: 100%;
    max-width: 300px;
    @media (min-width: 768px) {
      margin-left: 120px;
    }
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: var(--color-gray-2);
    text-align: center;
  }
`;
