import { useContext, useState } from "react";
import { Container } from "./styles";
import { Button } from "../../Buttons";
import { IoClose } from "react-icons/io5";
import { ModalGenericContext } from "./context";

interface iModalGeneric {
  title: string;
  children: React.ReactNode;
  button_color:
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
  button_content: React.ReactNode;
  button_size: "default" | "large";
  button_type: "button" | "submit" | "reset" | undefined;
}

export const ModalGeneric = ({
  title,
  children,
  button_color,
  button_content,
  button_size,
  button_type,
}: iModalGeneric) => {
  const { isOpen, setIsOpen } = useContext(ModalGenericContext);

  return (
    <Container>
      <Button
        color={button_color}
        content={button_content}
        size={button_size}
        type={button_type}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <section>
          <div>
            <header>
              <h3 className="font-heading-7-500">{title}</h3>
              <button onClick={() => setIsOpen(!isOpen)}>
                <IoClose />
              </button>
            </header>
            {children}
          </div>
        </section>
      )}
    </Container>
  );
};
