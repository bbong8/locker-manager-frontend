import React from "react";
import * as S from "./style.jsx";
import ButtonPopup from "../../button/ButtonPopup.jsx";
import InputPopup from "../../input/InputPopup.jsx";

function PopupAgree(){
  return (
    <S.Wrapper>

      <S.textWrapper>
        이메일 푸시 알림 수신 동의시 여러분의 <br></br>사물함 정보에 대한 알림을 받을 수 있습니다.
      </S.textWrapper>

      <S.ButtonWrapper>
        <ButtonPopup 
          title={"동의"} 
          buttonType={"important"} 
        >
        </ButtonPopup>
        <ButtonPopup 
          title={"다음에"} 
          buttonType={"normal"} 
        >
        </ButtonPopup>
      </S.ButtonWrapper>
    
    </S.Wrapper>
  );
}

export default PopupAgree;