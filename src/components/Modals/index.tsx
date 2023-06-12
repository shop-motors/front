import React, { ReactNode, useState } from 'react';
import StyledModalDiv from './style';

interface ModalProps {
  children: ReactNode;
  buttonText: string;
}

const Modal: React.FC<ModalProps> = ({ children, buttonText }) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button onClick={() => setModal(!modal)}>
        {buttonText}
      </button>
      {modal && (
        <StyledModalDiv className='modalContent'>
          {children}
        </StyledModalDiv>
      )}
    </div>
  );
};

export default Modal;

