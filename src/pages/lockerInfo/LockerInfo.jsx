import React, { useState } from "react";
import * as S from "./style.jsx";
import WarningInfo from "../../components/warning/warningInfo/WarningInfo.jsx";

function LockerInfo() {
  
  const e ={
    locker_number : "L-42",
    locker_location : "IT 5호관 1층 학생회실 옆",
    locker_password : "4092"
  }

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  }
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  }
  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
  }


  



  return(
    <S.Wrapper>

      <S.WarningWrapper>
        <WarningInfo message={"사물함 정보"}/>
      </S.WarningWrapper>

      <S.LockerWrapper>

        <S.LockerCardWrapper>

          <S.LockerInfoTitle>🔒 사물함 정보 조회 🔒</S.LockerInfoTitle>
          
          <S.LockerContentWrapper>
            <S.LockerNumber>사물함 번호 : {e.locker_number}</S.LockerNumber>
            <S.LockerLocation>사물함 위치 : {e.locker_location}</S.LockerLocation>
            <S.LockerPassword>사물함 비밀번호 : {e.locker_password}</S.LockerPassword>
            <S.PasswordButton>비밀번호 변경하기</S.PasswordButton>
          </S.LockerContentWrapper>
          
        </S.LockerCardWrapper>
  
      </S.LockerWrapper>

      <S.ReportWrapper>

      <S.ReportAcceptWrapper>
          <S.ReportCheckbox 
            type="checkbox"
            checked={isChecked1}
            onChange={handleCheckboxChange1}
          />
          <S.ReportCheckboxText
            onClick={handleCheckboxChange1}
          >
            거짓 신고일 경우, 사물함 이용이 제한될 수 있음을 확인했습니다
          </S.ReportCheckboxText>
        </S.ReportAcceptWrapper>

        <S.ReportAcceptWrapper>
          <S.ReportCheckbox 
            type="checkbox"
            checked={isChecked2}
            onChange={handleCheckboxChange2}
          />
          <S.ReportCheckboxText
            onClick={handleCheckboxChange2}
          >
            해당 사물함의 이용에 제한이 생겨 신고하는 것임을 확인했습니다.
          </S.ReportCheckboxText>
        </S.ReportAcceptWrapper>

        <S.ReportAcceptWrapper>
          <S.ReportCheckbox 
            type="checkbox"
            checked={isChecked3}
            onChange={handleCheckboxChange3}
          />
          <S.ReportCheckboxText
            onClick={handleCheckboxChange3}
          >
            사물함 결함 확인까지 1주일 정도 소요될 수 있음을 확인했습니다.
          </S.ReportCheckboxText>
        </S.ReportAcceptWrapper>

        <S.ReportButton
          onClick={() => {
            if(isChecked1 && isChecked2 && isChecked3){
              alert("신고가 접수되었습니다.");
            }
            else{
              alert("신고 접수를 위해 모든 약관에 동의해주세요.");
            }
          }}
        >
          사물함 고장 신고하기
        </S.ReportButton>

      </S.ReportWrapper>

    </S.Wrapper>
  );

}

export default LockerInfo;