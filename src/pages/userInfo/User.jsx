import React, { useState, useContext, useEffect } from "react";
import axios from "../../api/axios.js";
import * as S from "./style.jsx";
import WarningInfo from "../../components/warning/warningInfo/WarningInfo.jsx";
import { useNavigate } from "react-router-dom";
import useLoading from "../../hooks/loadingHook.jsx";
import Loading from "../loading/Loading.jsx";

function User(){
  const isLoading = useLoading(1500);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isCheckedAlarm, setIsCheckedAlarm] = useState(false);
  const [isCheckedEmail, setIsCheckedEmail] = useState(true);
  const [isCheckedPhone, setIsCheckedPhone] = useState(true);

  const handleCheckedChangeEmail = () => {
    setIsCheckedEmail(!isCheckedEmail);

  }

  const handleCheckedChangePhone = () => {
    setIsCheckedPhone(!isCheckedPhone);
  }

  const handleCheckbox = async() => {
    try{
      const token = localStorage.getItem('token');
      const response = await axios.put('/accounts/push-alarm', {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      let data = user;
      data.is_push_alarm = response.data.response;
      localStorage.setItem('user', JSON.stringify(data));
      setIsCheckedAlarm(!isCheckedAlarm);
      console.log(response);
    }catch(error){
      console.error(error);
    }

  }

  useEffect(() => {
    if(!localStorage.getItem('token')){
      alert("비정상적인 접근입니다.");
      navigate('/auth');
    }
    setUser(JSON.parse(localStorage.getItem('user')));
    setIsCheckedAlarm(JSON.parse(localStorage.getItem('user')).is_push_alarm);
  },[]);

  if(isLoading){
    return(
      <Loading />
    )
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
            <S.InvalidInfoInput disabled = {true} placeholder={user.school_number}></S.InvalidInfoInput>
          </S.InfoInputWrapper>
        </S.InfoWrapper>

        <S.InfoWrapper>
          <S.InfoTitle>- 학부/학과</S.InfoTitle>
          <S.InfoInputWrapper>
            <S.InvalidInfoInput disabled = {true} placeholder={"컴퓨터학부"}></S.InvalidInfoInput>
          </S.InfoInputWrapper>
        </S.InfoWrapper>

      </S.InvalidInfoWrapper>

      <S.ValidInfoWrapper>

        <S.InfoWrapper>
          <S.InfoTitle>- 전화번호</S.InfoTitle>
          <S.InfoInputWrapper>
            <S.validInfoInput disabled = {true} placeholder={user.phone_number}
            ></S.validInfoInput>
            {/* <S.changeButton
              onClick={handleCheckedChangePhone}
              button = {isCheckedPhone}
            >변경</S.changeButton> */}
          </S.InfoInputWrapper>
        </S.InfoWrapper>

        <S.InfoWrapper style={{marginBottom: "4%"}}>
          <S.InfoTitle>- 이메일</S.InfoTitle>
          <S.InfoInputWrapper>
            <S.validInfoInput disabled={true} placeholder={user.email}
            ></S.validInfoInput>
            {/* <S.changeButton
              onClick={handleCheckedChangeEmail}
            >변경</S.changeButton> */}
          </S.InfoInputWrapper>
        </S.InfoWrapper>

        <S.CheckboxWrapper>
          <S.Checkbox 
            type="checkbox"
            checked={JSON.parse(localStorage.getItem('user')).is_push_alarm}
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
            <S.validInfoInput disabled = {true} placeholder={"**********"} type="password"></S.validInfoInput>
            {/* <S.changeButton>변경</S.changeButton> */}
          </S.InfoInputWrapper>
        </S.InfoWrapper>

      </S.ValidInfoWrapper>
      
    </S.Wrapper>
  );

}

export default User;