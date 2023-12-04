import React, {useState} from "react";
import * as S from "./style.jsx";
import ButtonPopup from "../../button/ButtonPopup.jsx";
import InputPopup from "../../input/InputPopup.jsx";
import WarningPopup from "../../warning/WarningPopup.jsx";

function PopupPassword(){

  const [isWarning, setIsWarning] = useState(false);

  return (
    <S.Wrapper>

      <S.InputWrapper>
        <InputPopup type = "password" placeholder={"현재 비밀번호를 입력해주세요"}></InputPopup>
        <InputPopup type = "password" placeholder={"변경할 비밀번호를 입력해주세요"}></InputPopup>
      </S.InputWrapper>

      <S.WarningWrapper>
        {isWarning &&
          <WarningPopup 
            message = {"⚠️ 현재 비밀번호가 일치하지 않습니다"}
          >
          </WarningPopup>
        }
      </S.WarningWrapper>

      <S.ButtonWrapper>
        <ButtonPopup 
          title={"비밀번호 변경"} 
          buttonRole={"important"} 
        >
        </ButtonPopup>
      </S.ButtonWrapper>
      
    </S.Wrapper>
  );
}

export default PopupPassword;