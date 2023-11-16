import React, { useState } from 'react';
import * as S from "./style.jsx";

function Popup(data) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const popupContent = () => {
    switch(data.type){
      case 'email':
        return <></>;
        
      case 'emailAuth':
        return <></>;

      case 'pushAlarmAgree':
        return <></>;

      case 'passwordChange':
        return <></>;

      case 'blockChain':
        return <></>;

      default:
        return null;
    }
  };

  return (
    <S.PopupWrapper>
      <S.PopupTitle>
        {data.title}
      </S.PopupTitle>
      <S.PopupContentWrapper>
        {popupContent()}
      </S.PopupContentWrapper>

    </S.PopupWrapper>
    
  );
}

export default Popup;