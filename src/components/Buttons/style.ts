import styled, { css } from "styled-components";

interface iStyledButtonProps {
  size: "default" | "large";
  color:
    | "gray0"
    | "gray1"
    | "gray5"
    | "gray_white_5"
    | "gray6"
    | "gray8"
    | "gray10"
    | "brand1"
    | "brand2"
    | "brand3"
    | "brand4"
    | "alert1"
    | "alert2"
    | "success1"
    | "success2"
    | "border_dark_gray"
    | "border_ligth_gray"
    | "border_blue"
    | "disable";
}

const buttonVariants = {
  //-------------------SIZE----------------------

  default: css`
    font-size: var(--font-size-8);
    width: 119px;
    height: 38px;
    transition: 0.25s;
  `,

  large: css`
    font-size: var(--font-size-8);
    width: 100%;
    height: 38px;
    padding: 8px;
    :hover {
      width: 100%;
      height: 48px;
      transition: 0.25s;
      background-color: var(--color-gray-0);
    }
  `,

  //-------------------COLOR GRAY----------------------

  gray0: css`
    color: var(--color-white);
    background-color: var(--color-gray-0);
  `,

  gray1: css`
    color: var(--color-white);
    background-color: var(--color-gray-1);
  `,

  gray5: css`
    color: var(--color-gray-2);
    background-color: var(--color-gray-5);
  `,

  gray_white_5: css`
    color: var(--color-white);
    background-color: var(--color-gray-5);
  `,

  gray6: css`
    color: var(--color-gray-2);
    background-color: var(--color-gray-6);
  `,

  gray8: css`
    color: var(--color-gray-1);
    background-color: var(--color-gray-8);
  `,

  gray10: css`
    color: var(--color-gray-1);
    background-color: var(--color-gray-10);
  `,

  //-------------------COLOR BRAND----------------------

  brand1: css`
    color: var(--color-white);
    background-color: var(--color-brand-1);
  `,

  brand2: css`
    color: var(--color-white);
    background-color: var(--color-brand-2);
  `,

  brand3: css`
    color: var(--color-white);
    background-color: var(--color-brand-3);
  `,

  brand4: css`
    color: var(--color-brand-1);
    background-color: var(--color-brand-4);
  `,

  //----------------------COLOR ALERT----------------------
  alert1: css`
    color: var(--color-alert1);
    background-color: var(--color-alert3);
  `,

  alert2: css`
    color: var(--color-alert1);
    background-color: var(--color-alert2);
  `,

  //----------------------COLOR SUCCESS----------------------
  success1: css`
    color: var(--color-success1);
    background-color: var(--color-success2);
  `,

  success2: css`
    color: var(--color-success1);
    background-color: var(--color-success3);
  `,

  //-------------------BORDER BUTTON-------------------

  border_dark_gray: css`
    color: var(--color-gray-1);
    background-color: var(--color-gray-10);
    border: 0.125rem solid var(--color-gray-1);
  `,

  border_ligth_gray: css`
    color: var(--color-gray-1);
    background-color: var(--color-gray-10);
    border: 0.125rem solid var(--color-gray-4);
  `,

  border_blue: css`
    color: var(--color-gray-10);
    background-color: var(--color-brand-1);
    border: 0.125rem solid var(--color-brand-1);
  `,

  disable: css`
    color: var(--color-gray-50);
    background-color: var(--color-gray-0);
    border: 0.125rem solid var(--color-gray-20);
    pointer-events: none;
  `,
};

export const StyledButton = styled.button<iStyledButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: var(--font-size-8);
  font-weight: var(--font-weigth-2);
  width: 119px;
  height: 38px;
  transition: 0.25s;

  :hover {
    font-size: var(--font-size-7);
    width: 146px;
    height: 48px;
    transition: 0.25s;
  }

  ${({ size }) => buttonVariants[size]}
  ${({ color }) => buttonVariants[color]}
`;
