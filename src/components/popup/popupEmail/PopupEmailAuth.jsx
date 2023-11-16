import React, {useState, useContext} from "react";
import * as S from "./style.jsx";
import ButtonPopup from "../../button/ButtonPopup.jsx";
import InputPopup from "../../input/InputPopup.jsx";

function PopupEmailAuth(){

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <InputPopup placeholder={"이메일을 입력해주세요"}></InputPopup>
      </S.InputWrapper>
      <S.ButtonWrapper>
        <ButtonPopup 
          title={"인증하기"} 
          buttonType={"important"} 
        ></ButtonPopup>
        <ButtonPopup 
          title={"다시하기"} 
          buttonType={"normal"} 
        ></ButtonPopup>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

export default PopupEmailAuth;