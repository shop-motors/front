import { StyledButton } from "./style";

export interface iButtonProps {
  content: string | React.ReactNode;
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
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button = ({ content, size, color, onClick }: iButtonProps) => {
  return (
    <StyledButton size={size} color={color} onClick={onClick}>
      {content}
    </StyledButton>
  );
};
