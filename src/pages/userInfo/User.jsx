import React, { useState } from "react";
import * as S from "./style.jsx";
import WarningInfo from "../../components/warning/warningInfo/WarningInfo.jsx";


function User(){

  const user = {
    name : "홍봉기",
    id : "2023017368",
    major : "컴퓨터학부",
    phone : "01082554734",
    email : "ghdqhdrl612@naver.com",
    password : "82554734"
  }

  const [isCheckedEmail, setIsCheckedEmail] = useState(true);
  const [isCheckedPhone, setIsCheckedPhone] = useState(true);
  const [isCheckedAlarm, setIsCheckedAlarm] = useState(true);

  const handleCheckedChangeEmail = () => {

    setIsCheckedEmail(!isCheckedEmail);

  }

  const handleCheckedChangePhone = () => {
      
      setIsCheckedPhone(!isCheckedPhone);
  
  }

  const handleCheckbox = () => {
        
      setIsCheckedAlarm(!isCheckedAlarm);
  
  }

  return(
    <S.Wrapper>
      <WarningInfo message={"개인"}/>

      <S.InvalidInfoWrapper>

        <S.InfoWrapper>
          <S.InfoTitle>- 이름</S.InfoTitle>
          <S.InfoInputWrapper>
            <S.InvalidInfoInput disabled = {true} placeholder={user.name}></S.InvalidInfoInput>
          </S.InfoInputWrapper>
        </S.InfoWrapper>

        <S.InfoWrapper>
          <S.InfoTitle>- 학번</S.InfoTitle>
          <S.InfoInputWrapper>
            <S.InvalidInfoInput disabled = {true} placeholder={user.id}></S.InvalidInfoInput>
          </S.InfoInputWrapper>
        </S.InfoWrapper>

        <S.InfoWrapper>
          <S.InfoTitle>- 학부/학과</S.InfoTitle>
          <S.InfoInputWrapper>
            <S.InvalidInfoInput disabled = {true} placeholder={user.major}></S.InvalidInfoInput>
          </S.InfoInputWrapper>
        </S.InfoWrapper>

      </S.InvalidInfoWrapper>

      <S.ValidInfoWrapper>

        <S.InfoWrapper>
          <S.InfoTitle>- 전화번호</S.InfoTitle>
          <S.InfoInputWrapper>
            <S.validInfoInput disabled = {true} placeholder={user.phone}
            ></S.validInfoInput>
            <S.changeButton
              onClick={handleCheckedChangePhone}
              button = {isCheckedPhone}
            >변경</S.changeButton>
          </S.InfoInputWrapper>
        </S.InfoWrapper>

        <S.InfoWrapper style={{marginBottom: "4%"}}>
          <S.InfoTitle>- 이메일</S.InfoTitle>
          <S.InfoInputWrapper>
            <S.validInfoInput disabled={true} placeholder={user.email}
            ></S.validInfoInput>
            <S.changeButton
              onClick={handleCheckedChangeEmail}
            >변경</S.changeButton>
          </S.InfoInputWrapper>
        </S.InfoWrapper>

        <S.CheckboxWrapper>
          <S.Checkbox 
            type="checkbox"
            checked={isCheckedAlarm}
            onChange={handleCheckbox}
          />
          <S.CheckboxText
            onClick={handleCheckbox}
          >
            이메일 푸시 알림에 동의합니다.
          </S.CheckboxText>
        </S.CheckboxWrapper>

        <S.InfoWrapper>
          <S.InfoTitle>- 비밀번호</S.InfoTitle>
          <S.InfoInputWrapper>
            <S.validInfoInput disabled = {true} placeholder={user.password.replace(/./g, "*")} type="password"></S.validInfoInput>
            <S.changeButton>변경</S.changeButton>
          </S.InfoInputWrapper>
        </S.InfoWrapper>

      </S.ValidInfoWrapper>
      
    </S.Wrapper>
  );

}

export default User;