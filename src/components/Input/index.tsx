import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Container, InputStyles } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  error: string | undefined;
}

export const Input = ({
  label,
  placeholder,
  register,
  error,
  ...rest
}: IInputProps) => {
  return (
    <Container>
      <label className="font-input-label">{label}</label>
      <InputStyles
        className="font-input-placeholder"
        {...rest}
        {...register}
        placeholder={placeholder}
        error={error}
      />
      {error && <small>{error}</small>}
    </Container>
  );
};
