import React, { useContext } from 'react';
import StyledModalDiv from './style';
import { Button } from '../Buttons/index';
import { ModalProps } from '../../pages/contexts/modalContext/contextTypes';
import { ModalButtonContext } from '../../pages/contexts/modalContext';
import { ModalComponent } from './style';


const Modal: React.FC<ModalProps> = ({ children, content, size, color }) => {
  const { modal, setModal } = useContext(ModalButtonContext);
  
  return (
    <ModalComponent>
      <Button
        content={content} 
        size={size} 
        type='button'
        color={color} 
        onClick={() => setModal(!modal)} />
      {modal && (
        <StyledModalDiv className='modalContent'>
          <div className='divContent'>
            <button type="button" className='buttonCloseModal' onClick={()=>setModal(false)}>X</button>
            {children}
          </div>
        </StyledModalDiv>
      )}
    </ModalComponent>
  );
};

export default Modal;


