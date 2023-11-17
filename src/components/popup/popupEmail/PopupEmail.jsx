import React, {useContext} from "react";
import * as S from "./style.jsx";
import ButtonPopup from "../../button/ButtonPopup.jsx";
import InputPopup from "../../input/InputPopup.jsx";
import WarningPopup from "../../warning/WarningPopup.jsx";




function PopupEmail(){



  return (
    <S.Wrapper>
      <S.InputWrapper>
        <InputPopup placeholder={"이메일을 입력해주세요"}></InputPopup>
      </S.InputWrapper>
      <S.WarningWrapper>
        <WarningPopup message = {"⚠️ 사용 중인 이메일입니다"}></WarningPopup>
      </S.WarningWrapper>
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