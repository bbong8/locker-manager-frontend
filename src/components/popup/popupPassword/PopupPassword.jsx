import React from "react";
import * as S from "./style.jsx";
import ButtonPopup from "../../button/ButtonPopup.jsx";
import InputPopup from "../../input/InputPopup.jsx";

function PopupPassword(){

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <InputPopup type = "password" placeholder={"현재 비밀번호를 입력해주세요"}></InputPopup>
        <InputPopup type = "password" placeholder={"변경할 비밀번호를 입력해주세요"}></InputPopup>
      </S.InputWrapper>
      <S.ButtonWrapper>
        <ButtonPopup 
          title={"비밀번호 변경"} 
          buttonType={"important"} 
        >
        </ButtonPopup>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

export default PopupPassword;