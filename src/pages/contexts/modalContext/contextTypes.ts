export interface iModalButtonContext{
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface iModalButtonProvider{
    children: React.ReactNode;
}
export interface iDevice {
  device: 'desktop' | 'mobile';
}
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
    type: "button" | "submit" | "reset" | undefined,
    disabled?: boolean
  }

  export interface ModalProps extends iButtonProps {
    children: React.ReactNode;
    device: 'desktop' | 'mobile';
  }
  