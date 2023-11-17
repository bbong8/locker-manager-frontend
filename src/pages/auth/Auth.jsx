import React, {useState} from "react";
import * as S from "./style.jsx";
import InputLogin from "../../components/input/InputLogin/InputLogin.jsx";
import ButtonLogin from "../../components/button/buttonLogin/ButtonLogin.jsx";
import WarningPopup from "../../components/warning/WarningPopup.jsx";

function Auth(){
  const [isWarning, setIsWarning] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {

    setIsChecked(!isChecked);

  }

  

  return(
    <S.Wrapper>

        <S.TitleWrapper>
          <S.Title>로그인</S.Title>
        </S.TitleWrapper>

      <S.ContentWrapper>
        <S.InputWrapper>
          <InputLogin placeholder="학번을 입력해주세요" type="text"/>
          <InputLogin placeholder="비밀번호를 입력해주세요" type="password"/>
        </S.InputWrapper>

        <S.UtilWrapper>
          <S.UtilSaveWrapper>
            <S.UtilSave
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            ></S.UtilSave>

            <S.UtilSaveText
              onClick={handleCheckboxChange}
            >로그인 저장</S.UtilSaveText>
          </S.UtilSaveWrapper>

          <S.UtilFindWrapper>
            <S.UtilFind>
              비밀번호 찾기
            </S.UtilFind>
          </S.UtilFindWrapper>
        </S.UtilWrapper>

        <S.WarningWrapper>
          <WarningPopup
            message = {isWarning ? "⚠️ 비밀번호가 일치하지 않습니다" : "💡 초기 비밀번호는 전화번호 8자리 입니다." }
          />
        </S.WarningWrapper>

        <S.ButtonWrapper>
          <ButtonLogin title="로그인" buttonType="important"/>
        </S.ButtonWrapper>

      </S.ContentWrapper>
    </S.Wrapper>
    
  )
}

export default Auth;