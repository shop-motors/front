import styled, { css } from "styled-components";

interface iStyledButtonProps {
  size: "default" | "medium";
  color: "primary" | "gray" | "disable";
}

const buttonVariants = {};

export const StyledButton = styled.button<iStyledButtonProps>``;
