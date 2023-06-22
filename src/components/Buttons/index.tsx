import { iButtonProps } from "../../pages/contexts/modalContext/contextTypes";
import { StyledButton } from "./style";

export const Button = ({
  content,
  size,
  color,
  type,
  onClick,
  disabled,
}: iButtonProps) => {
  return (
    <StyledButton
      size={size}
      color={color}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {content}
    </StyledButton>
  );
};
