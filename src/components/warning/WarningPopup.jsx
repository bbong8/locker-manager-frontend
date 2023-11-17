import React from 'react';
import * as S from './style.jsx';

function WarningPopup(e){

  return(
    <S.Wrapper>
      <S.Message>
        {e.message}
      </S.Message>
    </S.Wrapper>
  )

}

export default WarningPopup;