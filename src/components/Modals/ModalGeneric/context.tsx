import { createContext, useState } from "react";

interface iModalGenericContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iModalGenericProvider {
  children: React.ReactNode;
}

export const ModalGenericContext = createContext({} as iModalGenericContext);

export const ModalGenericProvider = ({ children }: iModalGenericProvider) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalGenericContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalGenericContext.Provider>
  );
};
