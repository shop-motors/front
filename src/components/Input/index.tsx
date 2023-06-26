import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Container, InputStyles } from "./style";
import { StepIndicatorProps } from "@chakra-ui/react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  error?: string | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  register?: UseFormRegisterReturn<string>;
  /* onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined */
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
        /* onChange={() => console.log()} */
      />
      {error && <small>{error}</small>}
    </Container>
  );
};
