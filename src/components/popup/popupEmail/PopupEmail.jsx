import React, {useContext} from "react";
import * as S from "./style.jsx";
import ButtonPopup from "../../button/ButtonPopup.jsx";
import InputPopup from "../../input/InputPopup.jsx";




function PopupEmail(){



  return (
    <S.Wrapper>
      <S.InputWrapper>
        <InputPopup placeholder={"이메일을 입력해주세요"}></InputPopup>
      </S.InputWrapper>
      <S.ButtonWrapper>
        <ButtonPopup 
          title={"인증번호 발송"}
          buttonType={"important"}
         ></ButtonPopup>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

export default PopupEmail;