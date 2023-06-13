import React, { ReactNode, useState } from 'react';
import StyledModalDiv from './style';
import { Button, iButtonProps } from '../Buttons/index';

interface ModalProps extends iButtonProps {
  children: ReactNode;
  buttonText: string;
}

const Modal: React.FC<ModalProps> = ({ children, buttonText, size, color }) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Button 
        content={buttonText} 
        size={size} 
        color={color} 
        onClick={() => setModal(!modal)} />
      {modal && (
        <StyledModalDiv className='modalContent'>
          {children}
        </StyledModalDiv>
      )}
    </div>
  );
};

export default Modal;


