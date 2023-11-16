import React, {useContext, useState} from 'react';
import {ContentControl, TitleControl} from "./control/PopupControl.jsx";


import * as S from "./style.jsx";

function Popup() {
  const [type, setType] = useState('blockChain');

  return (
      <S.PopupWrapper>
        <S.PopupTitle>
          {TitleControl(type)}
        </S.PopupTitle>
        <S.PopupContentWrapper>
          {ContentControl(type)}
        </S.PopupContentWrapper>
      </S.PopupWrapper>
  );
}

export default Popup;