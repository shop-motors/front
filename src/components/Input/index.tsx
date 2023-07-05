import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Container, InputStyles } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
  error?: string | undefined;
  register?: UseFormRegisterReturn<string>;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
}

export const Input = ({
  label,
  placeholder,
  error,
  onBlur,
  register,
  ...rest
}: IInputProps) => {
  return (
    <Container>
      <label className="font-input-label">{label}</label>
      <InputStyles
        className="font-input-placeholder"
        {...register}
        {...rest}
        placeholder={placeholder}
        error={error}
        onBlur={onBlur}
      />
      {error && <small>{error}</small>}
    </Container>
  );
};
