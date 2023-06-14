import React, { useContext } from 'react';
import StyledModalDiv from './style';
import { Button } from '../Buttons/index';
import { ModalProps } from '../../pages/contexts/modalContext/contextTypes';
import { ModalButtonContext } from '../../pages/contexts/modalContext';


const Modal: React.FC<ModalProps> = ({ children, content, size, color }) => {
  const { modal, setModal } = useContext(ModalButtonContext);
  
  return (
    <div>
      <Button 
        content={content} 
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


