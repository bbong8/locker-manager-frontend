import React, {useEffect, useState} from 'react';
import {ContentControl, TitleControl} from "./control/PopupControl.jsx";

import * as S from "./style.jsx";

function Popup(e) {
  
  return (
      <S.PopupWrapper>
        <S.PopupTitle>
          {TitleControl(e)}
        </S.PopupTitle>
        <S.PopupContentWrapper>
          {ContentControl(e)}
        </S.PopupContentWrapper>
        
      </S.PopupWrapper>
  );
}

export default Popup;